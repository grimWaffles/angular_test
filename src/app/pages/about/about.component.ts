import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
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
    console.log("UserObj",this.userObj)
  }

   //For Forms Version #2
   userSignupForm : FormGroup;

   constructor(private formBuilder : FormBuilder){
    this.userSignupForm = this.formBuilder.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.min(8)]]
    });
   }

   onSubmit(){
    console.log("Form submitted")
    console.log("UserForm", this.userSignupForm)
   }
}
