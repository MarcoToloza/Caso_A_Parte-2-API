import { Component } from '@angular/core';
import { DjangoapiService } from '../servicios/djangoapi.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  myUsuarios: any;


  

  constructor(private api: DjangoapiService,private router: Router) {
    this.api.getUsuarios().subscribe(
      (usuarios)=>{
        console.log(usuarios);
        this.myUsuarios = usuarios
      }
      ,
      (error)=>{
        console.log(error);
      }
    )

  }

  loginUser(){
    const navigationExtras = {
      state:{
        username: this.username,
      },
    };
    this.router.navigate(['/login'], navigationExtras);
  }
    

  ngOnInit(){}


}
