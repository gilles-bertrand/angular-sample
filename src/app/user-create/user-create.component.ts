import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApirestService } from '../services/apirest.service';
import { CountriesService } from '../services/countries.service';
import { ValidationMessageService } from '../services/validation-message.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = {};
  public form: FormGroup;
  constructor(
    public validationMessageService: ValidationMessageService,
    private apirestServicer: ApirestService,
    private router: Router,
    public countriesService: CountriesService
  ) {}
  submitForm() {
    this.user = this.form.value;
    this.apirestServicer.postUser(this.user).subscribe((data: User) => {
      this.user = data;
      this.router.navigate(['/users']);
    });
  }
 
  ngOnInit() {
    this.form = new FormGroup({
      // id: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      street: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required]),
      town: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required])
    });
  }
}
