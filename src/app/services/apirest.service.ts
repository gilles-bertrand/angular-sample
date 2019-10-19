import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { catchError, map, debounceTime } from 'rxjs/operators'; 
const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  model = 'users';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http
      .get(`${BASE_URL}${this.model}`).pipe(
        map(data => data as User[])
      );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get(`${BASE_URL}${this.model}/${id}`).pipe(
      map(data => data as User )
    );
  }

  postUser(user: User): Observable<User> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('${BASE_URL}${model}', user, {headers});
  }

  updateUser(user: User): Observable<User>{
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.put(`${BASE_URL}${this.model}/${user.id}`, user, {headers});
  }

  deleteUser(id: number): Observable<User>{
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(`${BASE_URL}${this.model}/${id}`, {headers});
  }
}
