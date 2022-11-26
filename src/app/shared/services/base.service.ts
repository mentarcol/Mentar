import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private api = 'http://localhost:3000/'
  constructor(private http: HttpClient) {}

  postMethod(methodName: string, body: any) {
    return this.http.post(this.api + methodName, body);
  }
}
