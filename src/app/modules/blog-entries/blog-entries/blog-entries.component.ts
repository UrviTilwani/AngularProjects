import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
@Component({
  selector: 'app-blog-entries',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.css']
})
export class BlogEntriesComponent implements OnInit {

  data:any = [];
  
  constructor(private user:UsersService) { 

    this.user.getData().subscribe(data=>{
      console.warn(data);
      this.data = data;
    })
  }
    receiveIndex(index:number)
    {
      this.data.splice(index,1);
    }

  ngOnInit(): void {
  }

}
