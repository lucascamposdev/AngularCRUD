import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dataBase: AngularFirestore) { }

  getAllUsers(){
    return this.dataBase.collection('users', user => user.orderBy('name')).valueChanges({ idField: 'id'});
  }

  addUser(user: any){
    return this.dataBase.collection('users').add(user);
  }

  updateUser(userId: string, user: any){
    return this.dataBase.collection('users').doc(userId).update(user);
  }

  deleteUser(userId: string){
    return this.dataBase.collection('users').doc(userId).delete();
  }
}
