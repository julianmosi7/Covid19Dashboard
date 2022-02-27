import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../core/authentication.service';
import { AuthenticationDto } from '../models/authenticationDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = 'hhuber';
  password = 'quaxi';
  authenticationDto: AuthenticationDto = null;
  errorMessage = '';
  returnUrl: any;

  constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(`LoginComponent::ngOnInit`);
    this.returnUrl = this.route.snapshot?.queryParams?.returnUrl || '/';
  }

  public login(): void{
    console.log('LoginComponent::login');
    this.errorMessage = '';
    this.authenticationDto = null;
    this.authenticationService.login(this.username, this.password)
    .subscribe(x => {
      this.authenticationDto = x;
      this.router.navigate([this.returnUrl]);
    },
    error => {
      console.dir(error);
      this.errorMessage = `${error.statusText}/${error.status} - Username of Password is incorrect`
    });
  }

}
