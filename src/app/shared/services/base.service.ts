import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private api = 'https://mentarapi-production.up.railway.app/'
  constructor(private http: HttpClient) {}

  postMethod(methodName: string, body: any) {
    return this.http.post(this.api + methodName, body, { responseType: 'text' });
  }
}
