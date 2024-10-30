import { Component, Inject } from '@angular/core';
import { User } from '../../../../models/user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-view-user',
  templateUrl: './modal-view-user.component.html',
  styles: ``
})
export class ModalViewUserComponent {
  user: User

  constructor(
    public dialogRef: MatDialogRef<ModalViewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.user = data;
  }

  closeModal(){
    this.dialogRef.close();
  }
}
