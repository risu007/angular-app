import { Injectable } from '@angular/core';
import {User} from './userDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers(){
    const users: User[] = [
      {username : 'rishav' , password : '123456789' },
      {username : 'mihir' , password : '789654123' }
    ]
    return users;
  }

}
