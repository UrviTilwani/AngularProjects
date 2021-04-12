import { Component } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  constructor(private user: UsersService){

    this.user.getData().subscribe(data=>{
      console.warn(data);
    })

      this.user.postData().subscribe(recent_post=>{
      console.warn(recent_post);
    })

   
  
  }
}
