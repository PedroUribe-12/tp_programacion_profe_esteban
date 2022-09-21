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

  adminVisible: boolean = false; //Se declara una variable de tipo Booleana que comenzara en falso para que no se puede ver la parte del admin

  displayPosition!: boolean;

  position!: string;

  value: any;

  usuarios:User[];//Declaramos la variable usuarios de tipo usuario

  usuariosForm = new FormGroup(
    {
      email: new FormControl('', Validators.required),//Comprobamos que el campo email sea completado
      contrasenia: new FormControl('', Validators.required),//Comprobamos que el campo contrasenia sea completado
    }
  )


  //Creamos la funcion que nos permitira validar a los usuarios
  validarUsuario(){
    if(this.usuariosForm.valid){//si los campos han sido llenados entonces....
      this.usuarios.forEach(usuario => { //recorremos las propiedades del usuario
        if(this.usuariosForm.value.email === usuario.email){//Si el Email puesto en en el input es igual al email registrado en la base de datos que se encuentra en la variable usuario.email entonces...
          if(this.usuariosForm.value.contrasenia === usuario.contrasenia){//Si la contrasenia puesta en en el input es igual a la contrasenia registrada en la base de datos que se encuentra en la variable usuario.contrasenia entonces...
            this.adminVisible = true;//podra ver el item llamado admin y podra acceder al componente del mismo
            this.ngOnInit();
            this.displayPosition = false;//Se cerrara el dialogo
            alert('Se ha registrado correctamente');//Se mostrara un mensaje que dice Se ha registrado correctamente'
          }else{//Si la contrasenia es incorrecta a la registrada en la base de datos entonces...
            alert('La contraseña es incorrecta');//Se mostrara un mensaje que diga la constraseña es incorrecta
          }
        }
      });
    }else{//Si los campos no han sido completado entonces...
      alert('Faltan completar los campos');//Mostar un mensaje que diga Faltan completar los campos
    }
  }

  constructor(private servicioUsuarios: UsuariosService ) { //Injectamos el UsuariosService 
    //Creamos la funcion que cambiara de color del navbar cuando se realice un scroll
    window.addEventListener("scroll", function(){
      var menubar:any = this.document.querySelector(".p-component");
      menubar.classList.toggle("abajo", this.window.scrollY>0)
    })
  }

  ngOnInit(): void {
    //Se declaran los items que tendra el navbar
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

    //Suscribimos a los cambios a la variable usuarios
    this.servicioUsuarios.getUsuarios().subscribe(callUser => {
      this.usuarios = callUser;
    });
  }

  //Esta funcion es para que cuando se presione el boton registrate se dispare el dialogo
  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  } 
}
