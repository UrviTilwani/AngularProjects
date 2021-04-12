import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
@Component({
  selector: 'app-blog-entries',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.css']
})
export class BlogEntriesComponent implements OnInit {

  data:any = [];
  recent_post:any = [];

  constructor(private user:UsersService) { 

      this.user.getData().subscribe(data=>{
      console.warn(data);
      this.data = data;
    })

     this.user.postData().subscribe(recent_post=>{
      console.warn(recent_post);
      this.recent_post = recent_post;
    })
  }
    receiveIndex(index:number)
    {
      this.data.splice(index,1);
    }

    
  value:any

  @Input() result:any;

    searchData()
    {
      if (this.value =="") {
        this.ngOnInit();
      } 
      else{

        this.recent_post = this.recent_post.filter((item:any) =>
         {return item.title.match(this.value)});
      }
    }
    

  ngOnInit(): void {
  }

}
