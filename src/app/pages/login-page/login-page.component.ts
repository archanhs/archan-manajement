import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ILogin, ILoginToken } from 'src/app/interfaces/i-login';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';
import { catchError, throwError } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  defaultURL: string = 'dashboard';
  lastURL: string | null = null;
  user: ILogin = {
    username: '',
    password: '',
  };
  requiredForm: FormGroup;
  messageError: string = '';
  constructor(
    private loginService: LoginService,
    private storageService: StorageService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private fb: FormBuilder,
    private toasterService: ToasterService
  ) {
    this.requiredForm = new FormGroup({
      username: new FormControl(this.user.username, [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  ngOnInit(): void {
    this.activatedRouter.queryParamMap.subscribe((params) => {
      this.lastURL = params.get('lastURL');
    });
  }

  onSignIn() {
    this.loginService
      .login(this.user)
      .pipe(catchError(this.handleError))
      .subscribe(
        (response: ILoginToken) => {
          this.storageService.save('TOKEN', response.token);
          this.storageService.save('USERNAME', response.username);
          this.storageService.save('PHOTO_PROFILE', response.image);
          if (this.lastURL) {
            this.router.navigate([this.lastURL]);
          } else {
            this.router.navigate([this.defaultURL]);
          }
        },
        (error: any) => {
          console.log(error.message);
          this.messageError = error.message;
          this.toasterService.showToast = true;
          this.toasterService.message = 'Gagal login, silahkan coba kembali';
        }
      );
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    this.messageError = error.message;
    // this.toasterService.showToast = true;
    // this.toasterService.message = error.message;
    return throwError(() => new Error('Something bad happened'));
  }
}
