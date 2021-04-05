import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

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
