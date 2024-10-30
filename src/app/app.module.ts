import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './_components/button/button.component';
import { LoginComponent } from './_components/pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './_components/pages/home/home.component';
import { MenuComponent } from './_components/menu/menu.component';
import { AuthLayoutComponent } from './_components/layouts/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './_components/layouts/home-layout/home-layout.component';
import { MenuItemComponent } from './_components/menu/menu-item/menu-item.component'
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment.development';
import { CrudComponent } from './_components/pages/crud/crud.component';
import { CardDataSpinnerComponent } from './_components/card-data-spinner/card-data-spinner.component';
import { ProfileSidebarComponent } from './_components/pages/home/profile-sidebar/profile-sidebar.component';
import { CardComponent } from './_components/card/card.component';
import { ModalViewUserComponent } from './_components/pages/crud/modal-view-user/modal-view-user.component';

// Angular Material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    AuthLayoutComponent,
    HomeLayoutComponent,
    MenuItemComponent,
    CardComponent,
    CardDataSpinnerComponent,
    ProfileSidebarComponent,
    CrudComponent,
    ModalViewUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatPaginator,
    MatSort,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
