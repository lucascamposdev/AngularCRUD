import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dataBase: AngularFirestore) { }

  getAllUsers(){
    return this.dataBase.collection('users', user => user.orderBy('name')).valueChanges({ idField: 'id'});
  }

  addUser(user: User){
    return this.dataBase.collection('users').add(user);
  }

  updateUser(userId: string, user: User){
    return this.dataBase.collection('users').doc(userId).update(user);
  }

  deleteUser(userId: string){
    return this.dataBase.collection('users').doc(userId).delete();
  }
}
