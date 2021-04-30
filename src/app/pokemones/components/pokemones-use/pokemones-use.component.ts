import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Pokemones } from '../../interfaces/pokemones';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-pokemones-use',
  templateUrl: './pokemones-use.component.html',
  styleUrls: ['./pokemones-use.component.css']
})
export class PokemonesUseComponent implements OnInit {

  @Input() pokemones!: Pokemones[];

  get auth(){
    return this.authService._usuario;
  }

  public myForm: FormGroup = this.fb.group({
    name: ['']
  })

  get name(){
    return this.myForm.get('name')?.value;
  }



  constructor(private router: Router,
              private authService: AuthService,
              private fb: FormBuilder) { }


  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear()
    this.router.navigateByUrl('/autentication')
  }

}
