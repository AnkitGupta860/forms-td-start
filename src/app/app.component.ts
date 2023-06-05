import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm : NgForm;
  defaultQuestion = "teacher";
  answer = '';
  genders = ['Male','Female','Other'];
  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  }
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userdata:{
    //     username: suggestedName,
    //     email : ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'Male'
    // });
    this.signUpForm.form.patchValue({
      userdata: {
      username: suggestedName
      }
    });
  }

  // onSubmit(Form: NgForm){
  //   console.log(Form);
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signUpForm.value.userdata.username;
    this.user.email = this.signUpForm.value.userdata.email;
    this.user.secret = this.signUpForm.value.secret;
    this.user.questionAnswer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
