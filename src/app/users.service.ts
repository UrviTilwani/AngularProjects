import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData(){
    let url="https://api.mocki.io/v1/99933c38";
    return this.http.get(url);
  }

  postData(){
    let url="https://api.mocki.io/v1/51335630";
    return this.http.get(url);
  }
}

