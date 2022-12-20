import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  save(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  get(key: string): string | null {
    return localStorage.getItem(key);
  }
  check(key: string): boolean {
    if (localStorage.getItem(key)) {
      return true;
    } else {
      return false;
    }
  }
  clear(key: string) {
    localStorage.setItem(key, '');
  }
}
