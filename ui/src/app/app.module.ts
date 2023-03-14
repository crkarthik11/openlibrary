import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';
import { PublishersComponent } from './publishers/publishers.component';
import { StudentsComponent } from './students/students.component';
import { AuthorComponent } from './author/author.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AddBooksComponent } from './add-books/add-books.component';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AdminComponent,
    PublishersComponent,
    StudentsComponent,
    AuthorComponent,
    SidenavComponent,
    HomeComponent,
    AddAdminComponent,
    AddBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
