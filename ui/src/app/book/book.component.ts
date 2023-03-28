import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  title = 'Books Management'
  books: any = [];
  //books = []

  isGreen = true
  

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllBooks()
  }

  addBooks(){
   
    console.log("addBooks button clicked!!")
    // Take user to /add-books url
    this.router.navigateByUrl('/add-books')
  }

  fetchAllBooks(){
    this.http.get("http://localhost:8081/books/getAll")
    .subscribe(resp =>{
      this.books = resp;
      console.log('Books retrieved successfully:', this.books)
    }, error => {
      console.error('Error retrieving books:', error);
    });
  }

  deleteBook(bookId:Number){
    
    const url = 'http://localhost:8081/books/delete/' +bookId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Book deleted successfully');
      this.fetchAllBooks()
    }, error => {
      console.error('Error deleting book:', error);
    });
  }

}
