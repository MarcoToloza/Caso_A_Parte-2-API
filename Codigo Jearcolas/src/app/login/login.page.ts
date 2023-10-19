import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DjangoapiService } from '../servicios/djangoapi.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
username: string = '';

myUsuario: any;

  myUsuarios: any;

  nuevoUsuario: any = {
    nombre: '',
    correo: '',
    password: ''
  };

  constructor(private route: ActivatedRoute, private api: DjangoapiService) {}

  ngOnInit() {
    this.obtenerUsuarios();
    const navigation = window.history.state;
    if (navigation && navigation.username){
      this.username = navigation.username;
    }
  }
  obtenerUsuarios() {
    this.api.getUsuarios().subscribe(
      (usuarios) => {
        console.log(usuarios);
        this.myUsuarios = usuarios;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  crearNuevoUsuario() {
    this.api.crearUsuario(this.nuevoUsuario).subscribe(
      (response) => {
        console.log('Usuario creado:', response);
        // Luego de crear el usuario, puedes actualizar la lista de usuarios llamando a obtenerUsuarios()
        this.obtenerUsuarios();
      },
      (error) => {
        console.error('Error al crear usuario:', error);
      }
    );
  }

}
