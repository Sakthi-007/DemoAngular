import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  signup() {
    // Handle signup logic here, e.g., send data to server to create a new account
    console.log('Signing up with username:', this.username, 'email:', this.email, 'and password:', this.password);
  }

}
