import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  currentpower: number = 0;
  newpower: number = 0;
  onSubmit  ()
   {
     this.currentpower = this.newpower
  } ;
  
  constructor() { }

  ngOnInit() {
    
  }

}
