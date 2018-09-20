import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(public httpclient: HttpClient) {

}
errorHandler(error: any): void {
  return error;
}
getAllTasks(): Observable<any> {
  return this.httpclient.get<any>('http://localhost:3000/api/tasks')
    .pipe(
      map((e: Response) => e,
      catchError((e: Response) => throwError(e))
    ));
  }
}
