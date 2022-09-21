import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private coleccionUsuarios: AngularFirestoreCollection<User>//se crea una variable privada de tipo AngularFirestoreCollection

  constructor(db:AngularFirestore) { 
    this.coleccionUsuarios= db.collection('usuarios'); //Se guardan los datos de la coleccion de usuarios en la variable coleccionUsuarios
  }

  getUsuarios(){
    return this.coleccionUsuarios.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())));//Se obtienen los datos datos filtrados de los usuarios, obteniendo aquellos que queremos 
  } 
}
