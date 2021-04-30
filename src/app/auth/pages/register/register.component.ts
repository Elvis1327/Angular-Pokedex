import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router){
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  onSubmit(){

    if(this.myForm.invalid){
      Object.values(this.myForm.controls).map((res)=>{
        res.markAllAsTouched()
      })
    }

    const { name, email, password } = this.myForm.value;
    this.authService.registro(name, email, password).subscribe((res)=>{
        if(res === true){
          this.router.navigateByUrl('/pokemones/listado')
        }
    });

  };

  validate(campo: any){
    return this.myForm.get(campo)?.invalid &&
    this.myForm.get(campo)?.touched;
  }






}
