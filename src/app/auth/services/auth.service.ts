import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Usuario, Verificado } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  public _usuario!: Verificado;

  get usuario(){
    return {...this._usuario}
  }

  private baseUrl = environment.baseUrl;


  constructor(private http: HttpClient){

  };

  login(email: any, password: any){
    const body = { email, password};
    return this.http.post<Usuario>(`${this.baseUrl}`, body)
    .pipe(
      tap( resp =>{
        if(resp.ok === true){
          localStorage.setItem('token', resp.token);
        }
      }),
      map(res => res.ok),
      catchError(err => of(false))
    )
  };


  validarToken(): Observable<boolean>{
    const url = `${this.baseUrl}/renew`;
    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem('token') || '')

    return this.http.get<Usuario>(url, {headers: headers})
    .pipe(
      map(resp => {
        localStorage.setItem('token', resp.token);
        this._usuario = {
          name: resp.name,
          token: resp.token
        }
        return resp.ok;
      }),
      catchError( err => of(false))
    )
  }


  registro(name: any, email: any, password: any){
    const body = { name, email, password};
    return this.http.post<Usuario>(`${this.baseUrl}/new`, body)
    .pipe(
      tap( res =>{
        if(res.ok === true){
          localStorage.setItem('token', res.token)
        }
      }),
      map(resp => resp.ok),
      catchError(err => of(false))
    )
  }


};



