import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { map } from 'rxjs/operators';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private restService: RestService) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> {
    return this.restService.getUserById(route.params['id']).pipe(
      map(user => user)
    );

  }
}
