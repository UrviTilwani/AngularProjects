import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-rowcontent',
  templateUrl: './about-us-rowcontent.component.html',
  styleUrls: ['./about-us-rowcontent.component.css']
})
export class AboutUsRowcontentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() about_us_title1:string = "";
  @Input() about_us_title2:string = "";
  @Input() about_us_title3:string = "";
  @Input() about_us_title4:string = "";
  @Input() about_us_title5:string = "";
  @Input() about_us_title6:string = "";
  @Input() about_us_title7:string = "";
  @Input() about_us_title8:string = "";
  @Input() about_us_title9:string = "";

  @Input() about_us_desc1:string = "";
  @Input() about_us_desc2:string = "";
  @Input() about_us_desc6:string = "";
  @Input() about_us_desc7:string = "";
  @Input() about_us_desc8:string = "";
}
