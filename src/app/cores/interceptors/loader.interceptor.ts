import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { catchError, finalize, throwError, timeout } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loader = inject(LoaderService);

  loader.show();


  // const timerId = setTimeout(() => {
  //   console.log('timeout');
  // }, 5000);

  return next(req).pipe(

    finalize(() => {
      // clearTimeout(timerId);
      loader.hide();
    })
  );
};
