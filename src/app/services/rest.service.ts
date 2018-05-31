import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { catchError, map, debounceTime } from 'rxjs/operators';
@Injectable()
export class RestService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get('http://localhost:3000/users').pipe(
        map(data => data as User[])
      );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get(`http://localhost:3000/users/${id}`).pipe(
      map(data => data as User )
    );
  }

  postUser(user: User): Observable<User> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:3000/users', user, {headers});
  }

  updateUser(user: User): Observable<User>{
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.put(`http://localhost:3000/users/${user.id}`, user, {headers});
  }

  deleteUser(id: number): Observable<User>{
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(`http://localhost:3000/users/${id}`, {headers});
  }
}
