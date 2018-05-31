import { CountriesService } from './../../services/countries.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { RestService } from './../../services/rest.service';
import { User } from '../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationMessagesService } from '../../services/validation-messages.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  form: FormGroup;
  constructor(
    private router: Router,
    private _restService: RestService,
    private route: ActivatedRoute,
    public _validationMessageService: ValidationMessagesService,
    public _countriesService: CountriesService
  ) {
    // this.user={};
  }
    submitForm() {
    this.user = this.form.value;
    this._restService.updateUser(this.user)
    .subscribe((data: User) => {
      this.user = data;
      this.router.navigate(['/users']);
      });
  }


  ngOnInit() {

    this.form = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      street: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required]),
      town: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
    });

    // const id = this.route.snapshot.params.id;
    // this._restService.getUserById(id)
    // .subscribe((data: User) => {
    //   console.log(data)
    //   this.user = data;
    //   });
    // console.log(this.route)
    this.route.data
    // .pipe(tap(console.log))
    .subscribe(data => this.form.setValue(data.user));



  }

}
