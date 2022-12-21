import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private api = 'http://ec2-3-95-176-155.compute-1.amazonaws.com:3000/'
  constructor(private http: HttpClient) {}

  postMethod(methodName: string, body: any) {
    return this.http.post(this.api + methodName, body, { responseType: 'text' });
  }
}
