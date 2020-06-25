import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';
import { Book } from '../book/book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  author:string='';
  title:string='';
  book=new Book();
  constructor(private service:BookService) { }

  ngOnInit(): void {
  }
  saveBook(){
    console.log(this.author)
    console.log(this.title)
    this.book.title=this.title;
    this.book.author=this.author;
    this.service.saveBokk(this.book);

  }

}
