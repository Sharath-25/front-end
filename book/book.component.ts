import { Component, OnInit } from '@angular/core';
import {Book} from './book';
import { BookService } from './book.service';

@Component({
    selector:'app-book',
    templateUrl:'./book.component.html',
    styleUrls:['./book.component.css']
})
export class BookComponent implements OnInit{
  
    public books=[];
    public errorMessage;
    book=new Book();

constructor(private bookService:BookService){

}


    ngOnInit(){
        this.bookService.getAllBooks()
        .subscribe(data =>this.books=data,error=>this.errorMessage=error
        );
}



}