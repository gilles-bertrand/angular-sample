import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { MaterialModule } from './material/material.module';
import { ApirestService } from './services/apirest.service';
import { HttpClientModule } from '@angular/common/http';
import { UserResolver } from './services/user.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountriesService } from './services/countries.service';
import { ValidationMessageService } from './services/validation-message.service';

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ApirestService, UserResolver, CountriesService, ValidationMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
