import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-brand',
  templateUrl: './nav-brand.component.html',
  styleUrls: ['./nav-brand.component.css'],
})
export class NavBrandComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private loginService: LoginService, private router: Router) {}
  onLogOut() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
  isLoggedIn(): boolean {
    return this.loginService.isUserLogin();
  }
}
