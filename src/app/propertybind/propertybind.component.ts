import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybind',
  templateUrl: './propertybind.component.html',
  styleUrls: ['./propertybind.component.css']
})
export class PropertybindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dynName: string ="funmintraj"


enable : boolean = false;

}
