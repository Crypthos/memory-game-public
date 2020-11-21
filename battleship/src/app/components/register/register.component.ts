import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {forbiddenNameValidator} from "../validators/user-name.validator";
import {PasswordValidator} from "../validators/password.validator";
import { RegistrationService} from "../../registration.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  get userName(){
    return this.registrationForm.get('userName')
  }
  get userEmail(){
    return this.registrationForm.get('userEmail')
  }

  get password(){
    return this.registrationForm.get('password')
  }
  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
    userEmail: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['']
  },{ validator: PasswordValidator});

  onSubmit() {
    console.log(this.registrationForm.value);
    // this._registrationService.register(this.registrationForm.value)
    //   .subscribe(
    //     response => console.log('Success!', response),
    //     error => console.error('Error!', error)
    //   );
  }
}
