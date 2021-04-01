import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    @Input() title1 : string ="";
    @Input() desc : string="";
    @Input() row1 : string="";
    @Input() row2 : string="";
    @Input() row3 : string="";
    @Input() picture1 : string="";

    
}
