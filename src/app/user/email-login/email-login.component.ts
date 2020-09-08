import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss'],
})
export class EmailLoginComponent implements OnInit {
  form: FormGroup;

  type: 'login' | 'signup' | 'reset' = 'signup';
  loading = false;

  serverMessage: string;

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)], Validators.required],
      passwordConfirm: ['', []]

    })
  }

  changeType(val) {
    this.type = val;
  }

  /* Makes logic in HTML manageable */
  get isLogin() {
    return this.type === 'login';
  }

  get isSignup() {
    return this.type === 'signup';
  }

  get isPasswordReset() {
    return this.type === 'reset';
  }

  /* Form Controls from Reactive Form */
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get passwordDoesMatch() {
    return this.type !== 'signup' ? true : this.password.value === this.passwordConfirm.value;
    // if (this.type !== 'signup') {
    //   return true;
    // } else {
    //   return this.password.value === this.passwordConfirm.value;
    // }
  }

  async onSubmit() {
    

  }


}
