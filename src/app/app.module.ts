import { CountriesService } from './services/countries.service';
import { routes } from './app.routing';
import { RestService } from './services/rest.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UNIQUE_SELECTION_DISPATCHER_PROVIDER } from '@angular/cdk/collections';
import {UserResolver} from './services/user.resolver';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidationMessagesService } from './services/validation-messages.service';


@NgModule({
  declarations: [AppComponent, UsersListComponent, UserEditComponent, UserCreateComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RestService, UserResolver, ValidationMessagesService, CountriesService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
