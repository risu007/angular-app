import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../userDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  private allusers: User[];
  constructor(private users: UserService) {
    this.allusers = users.getUsers();
  }

  get username(){
    return this.form.value.username;
  }
  get password(){
    return this.form.value.password;
  }
  isValidInput(){
    const username = this.form.controls.username;
    const password = this.form.controls.password;
    if (username.errors || password.errors || this.form.errors) {
      return true;
    }
    return false;
  }

  private check(user: User, curUser: User){
    if (user.username === curUser.username && user.password === curUser.password) {
      return true;
    }
    return false;
  }
  login(){
    const currentuser: User = {
      username: this.username,
      password: this.password
    };
    const matchedUser = this.allusers.filter(((user) => this.check(user, currentuser)));
    if (matchedUser.length === 0) {
      this.form.setErrors({
        invalidLogin: true
      });
    }
  }
}
