import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../Shared/app-error';
import { NotFoundError } from '../Shared/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject('url') private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url)
    .pipe(
      catchError(err => {
          if(err.error instanceof ErrorEvent){
            return throwError(new AppError())
          }
          else
            return throwError(new NotFoundError())
      })
    )
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      catchError(err => {
        if(err.error instanceof ErrorEvent){
          return throwError(new AppError())
        }
        else
          return throwError(new NotFoundError())
      })
    )
  }

  update(resource){
    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource)).pipe(
      catchError(err => {
        if(err.error instanceof ErrorEvent){
          return throwError(new AppError())
        }
        else
          return throwError(new NotFoundError())
      })
    )
  }

  delete(id){
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(err => {
        if(err.error instanceof ErrorEvent){
          return throwError(new AppError())
        }
        else
          return throwError(new NotFoundError())
      })
    )
  }
}
