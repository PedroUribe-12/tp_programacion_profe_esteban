import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User } from 'src/app/models/user'; 
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];//declaro el arreglo que tendra las rutas del navegador

  adminVisible: boolean = false;

  displayPosition!: boolean;

  position!: string;

  value: any;

  usuarios:User[];

  usuariosForm = new FormGroup(
    {
      email: new FormControl('', Validators.required),
      contrasenia: new FormControl('', Validators.required),
    }
  )

  validarUsuario(){

    if(this.usuariosForm.valid){
      this.usuarios.forEach(usuario => {
        if(this.usuariosForm.value.email === usuario.email){
          if(this.usuariosForm.value.contrasenia === usuario.contrasenia){
            this.adminVisible = true;
            this.ngOnInit();
            this.displayPosition = false;
            alert('Se ha registrado correctamente');
          }else{
            alert('La contraseña es incorrecta');
          }
        }
      });
    }else{
      alert('Faltan completar los campos');
    }
  }

  constructor(private servicioUsuarios: UsuariosService) { 
    //Creamos la funcion que cambiara de color el navbar cuando se realice un scroll
    window.addEventListener("scroll", function(){
      var menubar:any = this.document.querySelector(".p-component");
      menubar.classList.toggle("abajo", this.window.scrollY>0)
    })
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon:'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'Contacto',
        icon:'pi pi-user',
        routerLink: 'contact',
      },
      {
        label: 'Admin',
        icon:'pi pi-phone',
        routerLink: 'admin',
        visible: this.adminVisible
      },
    ]

    this.servicioUsuarios.getUsuarios().subscribe(callUser => {
      this.usuarios = callUser;
    });
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  } 
}
