import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Cafe} from '../../../models/cafe'
import { CafesService } from 'src/app/servicios/cafes.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  displayPosition: boolean = false;
  eliminarVisible=false
  position:string;

  //variable que usamos para cambiar el agregar/editar
  textoBoton:string

  cafeSeleccionado:Cafe;

  //creamos el controlador del formulario
  nuevosCafes=new FormGroup({
    nombre: new FormControl('',Validators.required)!,
    precio: new FormControl(0,Validators.required)!,
    descripcion: new FormControl('', Validators.required)!,
    imagen: new FormControl('', Validators.required)!
  })


  cafes:Cafe[]

  constructor(private servicioCafes:CafesService) { }

  ngOnInit(): void {
    this.servicioCafes.getCafe().subscribe(Colcafes=>{
      this.cafes = Colcafes;
      console.log(Colcafes)
    })
  }
 //neudfdfdffbfb
  //Hacemos un metodo que agrega cafes y su datos a la base de datos y los muestra en cards
  agregarCafe(){

    if(this.nuevosCafes.valid){
      //Creamos una variable para agregar los productos
      let nuevoCafe:Cafe={
        //vinculamos el controlador del formulario
        nombre: this.nuevosCafes.value.nombre!,
        precio: this.nuevosCafes.value.precio!,
        descripcion: this.nuevosCafes.value.descripcion!,
        imagen: this.nuevosCafes.value.imagen!,
        idcafe:''
      }
      //declaramos la variable en el parametro
      this.servicioCafes.crearCafe(nuevoCafe).then(cafe=>{
        alert("producto agregado con exito")
      })
      .catch(error=>{
        alert("Ocurrio un error \nError: "+ error)
      })
    }
    else{
      alert("hay campos vacios")
    }
  }
  
  actualizarCafe(){
    
    let nuevoCafe:Cafe={
      nombre: this.nuevosCafes.value.nombre!,
      precio: this.nuevosCafes.value.precio!,
      descripcion: this.nuevosCafes.value.descripcion!,
      imagen: this.nuevosCafes.value.imagen!,
      idcafe:this.cafeSeleccionado.idcafe

    }

    this.servicioCafes.editarCafe(this.cafeSeleccionado.idcafe, nuevoCafe).then((resp)=>{
      alert('Cafe actualizado con exito')
      this.nuevosCafes=new FormGroup({
        nombre: new FormControl('',Validators.required)!,
        precio: new FormControl(0,Validators.required)!,
        descripcion: new FormControl('', Validators.required)!,
        imagen: new FormControl('', Validators.required)!
      })
    })
    .catch((error)=>{
      alert('No se puede actualizar')
    })
  }

  mostrarEditar(cafeSeleccionado:Cafe){
    this.textoBoton= 'Actualizar Caf??'
    this.cafeSeleccionado= cafeSeleccionado

    this.nuevosCafes.setValue({
      nombre: cafeSeleccionado.nombre,
      precio: cafeSeleccionado.precio,
      imagen: cafeSeleccionado.imagen,
      descripcion: cafeSeleccionado.descripcion
    })
    this.displayPosition=true

  }

//creamos una funcion que al selccionar un producto busque su id para despues eliminarlo
  mostrarEliminar(cafe:Cafe){
    this.eliminarVisible=true
    this.cafeSeleccionado= cafe
  }
  

  //Creamos el metodo que llama a la funcion "deleteCafe" en el Servicio de cafe "CafeServices"
  eliminarCafe(){
    this.servicioCafes.deleteCafe(this.cafeSeleccionado.idcafe).then((resp)=>{
      alert('el cafe fue eliminado con exito')
      this.nuevosCafes=new FormGroup({
        nombre: new FormControl('',Validators.required)!,
        precio: new FormControl(0,Validators.required)!,
        descripcion: new FormControl('', Validators.required)!,
        imagen: new FormControl('', Validators.required)!
      })
    })
    //si hay un error al eliminar se avisara con el "catch"
    .catch((err)=>{
      alert('no se pudo eliminar')
    })
  }
  cargarCafe(){
    if(this.textoBoton==='Agregar Caf??'){
      this.agregarCafe()
    }else if(this.textoBoton==='Actualizar Caf??'){
      this.actualizarCafe()
    }
  }
  showPositionDialog(position: string) {
    this.textoBoton= 'Agregar Caf??'
    this.position = position;
    this.displayPosition = true;
  }
}