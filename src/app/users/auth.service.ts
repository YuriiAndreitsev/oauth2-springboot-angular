import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./user";
import { access } from 'fs';

@Injectable()
export class AuthService {
  logout() {
    this.token = null;
    this.user = null;
    sessionStorage.clear;
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
  }
  private user: User;
  private token: string;

  constructor(private http: HttpClient) {
  }

  public get userCheck(): User {
    if (this.user != null) {
      return this.user;
    }
    else if (this.user == null && sessionStorage.getItem("user") != null) {
      this.user = JSON.parse(sessionStorage.getItem("user")) as User;
      return this.user;
    }
    return new User();
  }

  public get tokenCheck(): string {
    if (this.token != null) {
      return this.token;
    }
    else if (this.token == null && sessionStorage.getItem("token") != null) {
      this.token = sessionStorage.getItem("user") as string;
      return this.token;
    }
    return null;
  }

  public login(user: User): Observable<any> {
    const urlEndpoint = "http://localhost:8080/oauth/token";
    const credentials = btoa("angularapp:123");
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + credentials
    })
    let params = new URLSearchParams()
    params.set("grant_type", "password");
    params.set("username", user.username);
    params.set("password", user.password);
    return this.http.post(urlEndpoint, params.toString(), { headers: httpHeaders });
  }

  saveToken(accesstoken: string): void {
    this.token = accesstoken;
    sessionStorage.setItem("token", this.token);
  }

  saveUser(accesstoken: string): void {
    let payload = this.getToken(accesstoken);
    this.user = new User();
    this.user.name = payload.name;
    this.user.email = payload.email;
    this.user.surname = payload.surname;
    this.user.username = payload.user_name;
    this.user.roles = payload.authorities;
    sessionStorage.setItem("user", JSON.stringify(this.user));
  }

  private getToken(accesstoken: string): any {
    if (accesstoken != null) {
      return JSON.parse(atob(accesstoken.split(".")[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    let payload = this.getToken(this.tokenCheck);
    if (payload != null && payload.user_name && payload.user_name.length > 0) {
      return true;
    }
    return false;
  }
}
