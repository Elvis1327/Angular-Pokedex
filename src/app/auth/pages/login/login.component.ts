import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  myForm: FormGroup;


  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router){
    this.myForm = this.fb.group({
      email: ['test1@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).map(res => res.markAllAsTouched())
    };
    const { email, password } = this.myForm.value;

    this.authService.login(email, password).subscribe((res)=>{
      if(res === true){
        this.router.navigateByUrl('/pokemones/listado')
      }
    })
  };

  // Validacion de mi formulario
  validar(campo: string){
    return this.myForm.get(campo)?.invalid  &&
    this.myForm.get(campo)?.touched
  };


}
