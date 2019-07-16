import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookShelvesComponent } from './book-shelves/book-shelves.component';


const routes: Routes = [
  {
    path: '',
    component: BookShelvesComponent,
    data: { title: 'Book Shelves' }
  },
  {
    path: 'addbook',
    component: AddBookComponent,
    data: { title: 'Add Book' }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
