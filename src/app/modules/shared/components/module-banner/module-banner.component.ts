import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-banner',
  templateUrl: './module-banner.component.html',
  styleUrls: ['./module-banner.component.css']
})
export class ModuleBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() module_title:string="";
@Input() module_desc:string="";

}
