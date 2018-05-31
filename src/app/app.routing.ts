import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserResolver } from './services/user.resolver';
import { Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

export const routes: Routes = [
  {
    path: 'user/:id',
    component: UserEditComponent,
    resolve: {
      user: UserResolver
    },
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'users/add',
    component: UserCreateComponent
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }

];
