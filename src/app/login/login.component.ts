import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  login() {
    // Handle login logic here, e.g., send data to server for authentication
    console.log('Logging in with username:', this.username, 'and password:', this.password);
  }

}
