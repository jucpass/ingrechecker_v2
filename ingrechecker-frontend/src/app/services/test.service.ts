import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getHello() {
    return this.http.get(`${this.apiUrl}/hello`, { responseType: 'text' });
  }
}
