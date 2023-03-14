import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { PublishersComponent } from './publishers/publishers.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'publishers',
    component: PublishersComponent,
  },
  {
    path: 'add-books',
    component: AddBooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
