import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-entries-post',
  templateUrl: './blog-entries-post.component.html',
  styleUrls: ['./blog-entries-post.component.css']
})
export class BlogEntriesPostComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  @Input() index:any;
  @Output() sendIndex = new EventEmitter<any>();
  //sendIndex will pass the index to parent 

  deletePost(i:any)
  {
    this.sendIndex.emit(this.index);
  } 

  // @Input() post_picture : string ="";
  // @Input() post_title : string="";
  // @Input() post_decsription : string="";
  // @Input() post_admin : string="";
  // @Input() post_date : string="";
  // @Input() post_comment : string="";
  // @Input() post_content : string="";
  // @Input() post_tag : string="";
 
  
}
