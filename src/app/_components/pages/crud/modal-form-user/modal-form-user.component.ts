import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    private dialogRef: MatDialogRef<ModalFormUserComponent>,
    @Inject (MAT_DIALOG_DATA) public data: User
  ){}

  ngOnInit(): void {
    this.buildForm();
  }

  saveUser(){
    const objUserForm: User = this.formUser.getRawValue();


    if(this.data && this.data.id){
      this.userService.updateUser(this.data.id, objUserForm).then(
        (res: any) =>{
          this.closeModal();
        }
      ).catch(err => {
        console.error(err)
      })
    }else{
      this.userService.addUser(objUserForm).then(
        (res: any) =>{
          this.closeModal();
        }
      ).catch(err => {
        console.error(err)
      })
    }
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

    if(this.data && this.data.id){
      this.fillForm();
    }
  }

  fillForm(){
    this.formUser.patchValue({
      name: this.data.name,
      email: this.data.email,
      sector: this.data.sector,
      role: this.data.role,
      healthPlan: this.data.healthPlan,
      dentalPlan: this.data.dentalPlan,
    })
  }

  closeModal(){
    this.dialogRef.close();
  }
}
