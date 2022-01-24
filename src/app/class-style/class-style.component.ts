import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mypro: boolean = true;

  myStyle1:string = "15px";

  mtclasses = {
    class1:true,
    class2:true,
    class3:false
  }

  mltStyle ={
    'background':'red',
    'border':'10px solid green'
  }

}
