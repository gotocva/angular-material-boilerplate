import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { BaseComponent } from "../../base.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted = false;
  public displayText = {
    loginButton : 'Login'
  };

  constructor(private fb: FormBuilder) { 
    super();
  } 

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  submit() {
    console.dir('form submitted');
    this.submitted = true;
    if (this.loginForm.valid) {
      this.displayText.loginButton = 'Loading...';
      console.dir(this.loginForm.value);
    }
  }

}
