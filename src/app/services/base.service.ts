import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public baseUrl: string = 'https://dummyjson.com';

  constructor() {}
}
