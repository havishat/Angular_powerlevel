import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyanthree',
  templateUrl: './super-saiyanthree.component.html',
  styleUrls: ['./super-saiyanthree.component.css']
})
export class SuperSaiyanthreeComponent implements OnInit {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }

}
