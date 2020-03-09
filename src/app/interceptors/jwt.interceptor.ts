import { AuthenticationService } from './../common-services/authentication.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/common-services/loader.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private requests: HttpRequest<any>[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private loaderService: LoaderService
    ) { }

    private _removeRequest(req: HttpRequest<any>) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loaderService.isLoading.next(this.requests.length > 0);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });

            this.requests.push(request);
            this.loaderService.isLoading.next(true);
            return Observable.create(observer => {
                const subscription = next.handle(request)
                    .subscribe(
                        event => {
                            if (event instanceof HttpResponse) {
                                this._removeRequest(request);
                                observer.next(event);
                            }
                        },
                        err => {
                            this._removeRequest(request);
                            observer.error(err);
                        },
                        () => {
                            this._removeRequest(request);
                            observer.complete();
                        });

                // remove request from queue when cancelled
                return () => {
                    this._removeRequest(request);
                    subscription.unsubscribe();
                };
            });
        }

        return null;
    }
}
