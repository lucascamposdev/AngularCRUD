import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { ModalViewUserComponent } from './modal-view-user/modal-view-user.component';
import { ModalFormUserComponent } from './modal-form-user/modal-form-user.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styles: ``
})
export class CrudComponent {
  displayedColumns: String[] = ['id', 'name', 'email', 'role', 'benefits', 'action']
  dataSource: MatTableDataSource<User[]>;
  listUser: User[] = [];

  constructor(
    private userService: UserService,
    private matDialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<User[]>();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getListUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getListUsers(){
    this.userService.getAllUsers().subscribe({
      next: (res: any) => {
        const listUsers = res;
        this.dataSource = new MatTableDataSource<User[]>(listUsers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err: any) =>{
        console.log(err)
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource)
  }

  // Modal Logic

  openModalViewUser(user: User){
    this.matDialog.open(ModalViewUserComponent, {
      data: user
    });
  }

  openModalFormUser(){
    this.matDialog.open(ModalFormUserComponent, {
    });
  }

  openModalEditUser(user: User){
    this.matDialog.open(ModalFormUserComponent, {
      data: user
    });
  }

  deleteUser(id: string){
    this.userService.deleteUser(id).then(
      (res => {
        window.alert("User deleted successfully!")
      })
    )
  }
}
