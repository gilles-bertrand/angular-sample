import { Injectable } from '@angular/core';
import { User } from './../models/user';
import { ApirestService } from './apirest.service';
import { map } from 'rxjs/operators';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private restService: ApirestService) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> {
    return this.restService.getUserById(route.params['id']).pipe(
      map(user => user)
    );
  }
}