import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationService } from '../../service/notification/notification.service';
import { NotificationMessageEnum, NotificationTypeEnum } from 'src/app/shared/emun/notification-enum';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let message: NotificationMessageEnum;

        switch (err.status) {
          case 401:
            message = NotificationMessageEnum.ErrorUnauthorized;
            break;
          case 403:
            message = NotificationMessageEnum.ErrorForbidden;
            break;
          case 404:
            message = NotificationMessageEnum.ErrorNotFound;
            break;
          case 500:
            message = NotificationMessageEnum.ErrorInternalServer;
            break;
          default:
            message = NotificationMessageEnum.ErrorOccurred;
        }

        this.notificationService.show(NotificationTypeEnum.Error, message);
        return throwError(err);
      })
    );
  }
}
