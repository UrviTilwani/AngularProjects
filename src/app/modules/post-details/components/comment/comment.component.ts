import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() comment_author : string="";
  @Input() comment_title : string="";
  @Input() comment_desc : string="";
  @Input() comment_date : string="";

}
