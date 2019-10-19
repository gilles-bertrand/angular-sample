import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserResolver } from './services/user.resolver';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path: 'user/:id',
    component: UserEditComponent,
    resolve: {
      user: UserResolver
    },
  },
  {
    path: 'users',
    component: UserListComponent
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
