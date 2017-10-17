import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyanfour',
  templateUrl: './super-saiyanfour.component.html',
  styleUrls: ['./super-saiyanfour.component.css']
})
export class SuperSaiyanfourComponent implements OnInit {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }

}
