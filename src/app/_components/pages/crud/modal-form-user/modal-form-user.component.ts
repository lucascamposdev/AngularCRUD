import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styles: ``
})
export class ModalFormUserComponent {

  formUser: FormGroup
  plans = [
    {
      name: 'Basic'
    },
    {
      name: 'Standard'
    },
    {
      name: 'Premium'
    }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<ModalFormUserComponent>
  ){}

  ngOnInit(): void {
    this.buildForm();
  }

  saveUser(){
    const objUserForm: User = this.formUser.getRawValue();

    this.userService.addUser(objUserForm).then(
      (res: any) =>{
        this.closeModal();
      }
    ).catch(err => {
      console.error(err)
    })
  }

  buildForm(){
    this.formUser = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      sector: [null, [Validators.required, Validators.minLength(3)]],
      role: [null, [Validators.required, Validators.minLength(3)]],
      healthPlan: [''],
      dentalPlan: [''],
    })
  }

  closeModal(){
    this.dialogRef.close();
  }
}
