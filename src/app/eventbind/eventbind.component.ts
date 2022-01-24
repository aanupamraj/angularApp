import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  msg:string =""
  // onAddCart(){
  //   this.msg="Product added in cart"

  // }

  // onInputClick(event: any){
  //   console.log(event.target.value);

  // }
  // onAddCart(event: any){
  //   this.msg= event.target.value  +  " Product added in cart";
  // }

  getInputInfo(my : any){
    console.log(my.value)

  }

}
