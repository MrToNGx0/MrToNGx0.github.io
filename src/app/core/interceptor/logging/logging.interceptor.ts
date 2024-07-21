import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!environment.isProduction) {
      return next.handle(req);
    }

    const started = Date.now();
    const method = req.method;
    const url = req.urlWithParams;
    const body = req.body;

    console.log(`[Request] ${method} ${url}`, body);

    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            const elapsed = Date.now() - started;
            console.log(`[Response] ${method} ${url} took ${elapsed} ms`, event.body);
          }
        },
        error => {
          console.error(`[Error] ${method} ${url}`, error);
        }
      )
    );
  }
}
