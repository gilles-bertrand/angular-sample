import { Injectable } from "@angular/core";
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: "root"
})
export class ValidationMessageService {
  getErrorMessage(field: string, form: FormGroup): string {
    const errors = {
      required: "This field is required",
      email: "this fields must contains a valid email"
    };
    let returnValue = "";
    Object.keys(form.controls[field].errors).map((key, index) => {
      returnValue += `Rule ${index} - ${errors[key]}  `;
    });
    return returnValue;
  }
  constructor() {}
}
