import { Injectable } from '@angular/core';
import {User} from './userDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[];
  constructor() {
    this.users = [
      {username : 'rishav' , password : '123456789' },
      {username : 'mihir' , password : '789654123' }
    ];
  }
  getUsers(){
    return this.users;
  }
  updateUsers(user: User){
    this.users.push(user);
  }
}
