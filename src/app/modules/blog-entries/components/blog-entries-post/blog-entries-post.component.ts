import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-entries-post',
  templateUrl: './blog-entries-post.component.html',
  styleUrls: ['./blog-entries-post.component.css']
})
export class BlogEntriesPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() post_picture : string ="";
  @Input() post_title : string="";
  @Input() post_decsription : string="";
  @Input() post_admin : string="";
  @Input() post_date : string="";
  @Input() post_comment : string="";
  @Input() post_content : string="";
  @Input() post_tag : string="";

}
