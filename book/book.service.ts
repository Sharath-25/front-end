import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Book} from './book';
import { SBook } from './books';
import { Observable } from 'rxjs';


@Injectable()
export class BookService implements OnInit{
    msg:boolean=false;
    ngOnInit(): void {
        throw new Error("Method not implemented.");

    }
 
    private baseUrl="http://localhost:8089/book-angular/api/books";
    private save="http://localhost:8089/book-angular/api/book/save";
constructor(private httpService:HttpClient){}
 

getAllBooks():Observable<SBook[]>{ 
 return this.httpService.get<SBook[]>(this.baseUrl);
 

}

saveBokk(book:Book):void{
    this.httpService.post(this.save,book)
    .subscribe();
    console.log("saved")




}
}