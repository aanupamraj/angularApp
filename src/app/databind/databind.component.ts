import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dynName: string ="funmintraj"

  myMethod(){
    return "My channel name is " + this.dynName
  }
  appStatus:boolean = true;
  status1 ="Online";
  status2 ="Offline"

}
