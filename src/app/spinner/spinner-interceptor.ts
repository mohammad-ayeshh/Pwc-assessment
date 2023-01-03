import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { SpinnerOverlayService } from './spinner-overlay.service';



@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private readonly spinnerOverlayService: SpinnerOverlayService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerOverlayService.show();
    return next.handle(req).pipe(finalize(() => this.spinnerOverlayService.hide()));
  }
}