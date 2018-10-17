import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  signingUpResult: { message: string };

  signUpForm: FormGroup;

  ngOnInit() {
    this.signingUpResult = this.authService.signingUpResult;

    this.signUpForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, , Validators.min(3)])
    })
  }

  onSignUp() {
    this.authService.signUpUser(this.signUpForm.value.email, this.signUpForm.value.password);
    this.signUpForm.reset();
  }

}
