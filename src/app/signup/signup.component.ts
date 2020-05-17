import { UserService } from './../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../userDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(13)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  private allusers: User[];
  constructor(private users: UserService, private router: Router) {
    this.allusers = users.getUsers();
  }

  get username(){
    return this.form.controls.username;
  }
  get password(){
    return this.form.controls.password;
  }
  isValidInput(){
    const username = this.username;
    const password = this.password;
    if (username.errors || password.errors || this.form.errors) {
      return true;
    }
    return false;
  }
  signup(){
    const curUser = {
    username: this.username.value,
    password: this.password.value
    };
    const isduplicate = this.allusers.filter((user) => {
      return user.username.localeCompare(curUser.username) === 0;
      });
    if (isduplicate.length > 0){
      this.form.setErrors({
        isInvalid: true
      });
    }
    else {
     this.users.updateUsers(curUser);
     this.router.navigate(['/login']);
    }
  }
}
