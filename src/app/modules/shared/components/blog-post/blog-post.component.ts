import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

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
  @Input() post_share : string="";

}
