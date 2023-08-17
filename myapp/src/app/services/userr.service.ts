import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Userr } from 'src/model/userr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserrService implements OnInit {

  apiUrl="http://localhost:8080/api/users/getall"

  constructor(private httpClient:HttpClient) {

   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getall():Observable<Userr[]>{
    return this.httpClient.get<Userr[]>(this.apiUrl);
  
  }
}
