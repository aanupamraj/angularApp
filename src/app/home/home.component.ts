import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title ='To Do List';
  constructor() { }

  ngOnInit(): void {
  }
  list:any[]=[];
  addTask(item:string){
  this.list.push({id:this.list.length,name:item});
  // console.warn(this.list);
  }
  removeTask(id: number){
    this.list=this.list.filter(item=> item.id!==id)
  // console.warn(id);
  }
  editTask(id: number){
  // this.list=this.list.findIndex(item=> item.id!== id)
  }


}
