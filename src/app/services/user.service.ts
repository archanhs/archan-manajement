import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, IUserWrapper } from '../interfaces/i-user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endpoint: string = '/users';

  constructor(
    private baseService: BaseService,
    private httpClient: HttpClient
  ) {}

  all(): Observable<IUserWrapper> {
    return this.httpClient.get<IUserWrapper>(
      `${this.baseService.baseUrl}${this.endpoint}`
    );
  }

  post(user: IUser): Observable<IUser> {
    let url = this.baseService.baseUrl + this.endpoint + '/add';
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify(user);
    return this.httpClient.post<any>(`${url}`, body, { headers });
  }

  update(user: IUser): Observable<IUser> {
    const { id, ...userClean } = user;
    let url = this.baseService.baseUrl + this.endpoint + `/${id}`;
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify(userClean);
    return this.httpClient.put<any>(`${url}`, body, { headers });
  }

  delete(id: number): Observable<IUser> {
    let url = this.baseService.baseUrl + this.endpoint + `/${id}`;
    return this.httpClient.delete<any>(`${url}`);
  }
}
