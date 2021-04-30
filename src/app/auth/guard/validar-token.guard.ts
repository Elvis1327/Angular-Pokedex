import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router){

  }

  canActivate(): Observable<boolean> | boolean {
    console.log('CanActivate')
    return this.authService.validarToken()
    .pipe(
      tap( valid => {
        if( valid === false){
          this.router.navigateByUrl('/autentication')
        }
      } )
    )
  }

  canLoad(): Observable<boolean>  | boolean  {
    console.log('canLoad')
    return this.authService.validarToken().pipe(
      tap( valid => {
        if(valid === false){
          this.router.navigateByUrl('/autentication')
        }
      })
    )
  }
}
