import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../userDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  private allusers: User[];
  constructor(private users: UserService) {
    this.allusers = users.getUsers();
  }

  private check(user: User, curUser: User){
    if (user.username === curUser.username && user.password === curUser.password) {
      return true;
    }
    return false;
  }

  login(){
    const currentuser: User = {
      username: this.form.value.username,
      password: this.form.value.password
    };
    let matchedUser = this.allusers.filter(((user) => this.check(user, currentuser)));
    console.log(matchedUser, currentuser);
    if (matchedUser.length === 0) {
      this.form.setErrors({
        invalidLogin: true
      });
    }
  }
}
