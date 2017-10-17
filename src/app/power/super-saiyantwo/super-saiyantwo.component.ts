import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyantwo',
  templateUrl: './super-saiyantwo.component.html',
  styleUrls: ['./super-saiyantwo.component.css']
})
export class SuperSaiyantwoComponent implements OnInit {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }

}
