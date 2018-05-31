import { RestService } from './../../services/rest.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = {};
  form : FormGroup;
  countries = ['Afghanistan','Albania','Algeria','Andorra','Angola','Anguilla','Antigua &amp; Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas'
  ,'Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia &amp; Herzegovina','Botswana','Brazil','British Virgin Islands'
  ,'Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Chad','Chile','China','Colombia','Congo','Cook Islands','Costa Rica'
  ,'Cote D Ivoire','Croatia','Cruise Ship','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea'
  ,'Estonia','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Polynesia','French West Indies','Gabon','Gambia','Georgia','Germany','Ghana'
  ,'Gibraltar','Greece','Greenland','Grenada','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India'
  ,'Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kuwait','Kyrgyz Republic','Laos','Latvia'
  ,'Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Mauritania'
  ,'Mauritius','Mexico','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Namibia','Nepal','Netherlands','Netherlands Antilles','New Caledonia'
  ,'New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal'
  ,'Puerto Rico','Qatar','Reunion','Romania','Russia','Rwanda','Saint Pierre &amp; Miquelon','Samoa','San Marino','Satellite','Saudi Arabia','Senegal','Serbia','Seychelles'
  ,'Sierra Leone','Singapore','Slovakia','Slovenia','South Africa','South Korea','Spain','Sri Lanka','St Kitts &amp; Nevis','St Lucia','St Vincent','St. Lucia','Sudan'
  ,'Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor L\'Este','Togo','Tonga','Trinidad &amp; Tobago','Tunisia'
  ,'Turkey','Turkmenistan','Turks &amp; Caicos','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','United States Minor Outlying Islands','Uruguay','Uzbekistan','Venezuela','Vietnam','Virgin Islands (US)'
  ,'Yemen','Zambia','Zimbabwe'];
  constructor(private _restService: RestService, private router:Router) { }
  submitForm() {
    this.user = this.form.value;
    this._restService.postUser(this.user)
    .subscribe((data: User) => {
      this.user = data;
      this.router.navigate(['/users']);
      });
  }
  getErrorMessage(field: string): string {
    const errors = {
      required: 'This field is required',
      email: 'this fields must contains a valid email'
    };
    let returnValue = '';
    Object.keys(this.form.controls[field].errors).map(function(key, index) {
      returnValue +=`Rule ${index} - ${errors[key]}  `;
   });
   return returnValue;

  }
  ngOnInit() {
    this.form = new FormGroup({
      // id: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      street: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required]),
      town: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
    });

  }

}
