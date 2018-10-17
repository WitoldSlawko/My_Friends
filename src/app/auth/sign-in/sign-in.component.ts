import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  signingInResult: { message: string };

  signInForm: FormGroup;

  ngOnInit() {
    this.signingInResult = this.authService.signingInResult;

    this.signInForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.min(3)])
    })
  }

  onSignIn() {
    console.log(this.signInForm)
    this.authService.signInUser(this.signInForm.value.email, this.signInForm.value.password);
    this.signInForm.reset();
  }

}
