import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  curUser: string;
  constructor(private users: UserService, private router: Router) {
    this.curUser = this.users.loggedUser;
  }

  ngOnInit(): void {
    if (this.curUser === ''){
      this.router.navigate(['/login']);
    }
  }
  logout(){
    this.users.loggedUser = '';
    this.router.navigate(['/login']);
  }
}
