import {Injectable} from '@angular/core';
import {Cliente} from './cliente';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Router} from "@angular/router";
import {_throw as throwError} from 'rxjs/observable/throw';
import {AuthService} from "../users/auth.service";

@Injectable()
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
  }

  private agregateAuthHeader() {
    let token = this.authService.tokenCheck;
    if (token != null) {
      return this.httpHeaders.append("Authorization", "Bearer " + token);
    }
    return this.httpHeaders;
  }

  private isUnauthorized(e): boolean {
    if (e.status == 401 || e.status == 403) {
      this.router.navigate(['/login']);
      return true
    }
    return false;
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }


  create(cliente: Cliente): Observable<{} | Cliente> {
    return this.http.post(this.urlEndPoint, cliente, {headers: new HttpHeaders({'Content-Type': 'application/json'})})
      .pipe(
        map((response: any) => response.cliente as Cliente),
        catchError(e => {
          if (this.isUnauthorized(e)) {
            return throwError(e);
          }
          if (e.status == 400) {
            return throwError(e);
          }
          return throwError(e);
        })
      );
  }

  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
