import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationService } from '../../services/notification/notification.service';
import { RESPONSE_TYPE } from 'src/app/core/constants/constants';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let message: string;

        console.log(1);

        switch (err.status) {
          case 401:
            message = 'notification.message.errorUnauthorized';
            break;
          case 403:
            message = 'notification.message.errorForbidden';
            break;
          case 404:
            message = 'notification.message.errorNotFound';
            break;
          case 500:
            message = 'notification.message.errorInternalServer';
            break;
          default:
            message = 'notification.message.errorOccurred';
        }

        this.notificationService.show(RESPONSE_TYPE.Error, message);
        return throwError(err);
      }),
    );
  }
}
