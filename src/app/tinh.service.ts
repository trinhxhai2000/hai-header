import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tinh } from './tinh';
import { Huyen } from './huyen';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class TinhService {
  private apiUrl = 'api'
  constructor(
    private http: HttpClient
  ) { }
  getTinhs(): Observable<Tinh[]> {
    return this.http.get<Tinh[]>(this.apiUrl + "/tinhs").pipe(
      // tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Tinh[]>('getHeroes',[]))
    );
  }
  getHuyens(): Observable<Huyen[]> {
    return this.http.get<Huyen[]>(this.apiUrl + "/huyens").pipe(
      // tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Huyen[]>('getHeroes',[]))
    );
  }

  // getHero(id: number): Observable<Huyen> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Huyen>(url).pipe(
  //     // tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Huyen>(`getHero id=${id}`))
  //   );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
