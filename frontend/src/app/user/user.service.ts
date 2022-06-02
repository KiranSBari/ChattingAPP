import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  loginurl =environment.apiUrl + "login"

  customerlogin(Customer: { username: string; password: string; }) : Observable<any> {
    let login_customer = {
      "username": Customer.username,
      "password": Customer.password,
      }
  var res = this.http.post<any>(this.loginurl,login_customer);
  return res;
  }
}
