import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  data: string[] = ['Apples', 'Oranges', 'Purple']

  //For Forms Version #1
  userObj = {
    username: "wazi",
    password: "12345678",
    email: "w@gmail.com"
  }

  processData() {
    console.log('Form submitted')
    console.log("UserObj", this.userObj)
  }

  //For Forms Version #2
  userSignupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.userSignupForm = this.formBuilder.group({
      username: [this.userObj.username, Validators.required],
      email: [this.userObj.email, [Validators.required, Validators.email]],
      password: [this.userObj.password, [Validators.required, Validators.minLength(8)]]
    });

    // this.userSignupForm.controls['username'].setValue(this.userObj.username)
    // this.userSignupForm.controls['password'].setValue(this.userObj.password)
    // this.userSignupForm.controls['email'].setValue(this.userObj.email)
  }

  onSubmit() {
    console.log("Form submitted")
    console.log("UserForm", this.userSignupForm)
  }
}
