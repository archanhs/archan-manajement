import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, IProductWrapper } from '../interfaces/i-product';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  endpoint: string = '/products';

  constructor(
    private baseService: BaseService,
    private httpClient: HttpClient
  ) {}

  all(): Observable<IProductWrapper> {
    return this.httpClient.get<IProductWrapper>(
      `${this.baseService.baseUrl}${this.endpoint}`
    );
  }

  post(product: IProduct): Observable<IProduct> {
    let url = this.baseService.baseUrl + this.endpoint + '/add';
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify(product);
    return this.httpClient.post<any>(`${url}`, body, { headers });
  }

  update(product: IProduct): Observable<IProduct> {
    const { id, ...productClean } = product;
    let url = this.baseService.baseUrl + this.endpoint + `/${id}`;
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify(productClean);
    return this.httpClient.put<any>(`${url}`, body, { headers });
  }

  delete(id: number): Observable<IProduct> {
    let url = this.baseService.baseUrl + this.endpoint + `/${id}`;
    return this.httpClient.delete<any>(`${url}`);
  }
}
