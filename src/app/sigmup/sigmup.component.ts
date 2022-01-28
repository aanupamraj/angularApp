import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sigmup',
  templateUrl: './sigmup.component.html',
  styleUrls: ['./sigmup.component.css']
})
export class SigmupComponent implements OnInit {
public signUp = {email:'',password:'',username:''};
  constructor() { }

  ngOnInit(): void {
  }
//Get ka method hoga->let local = JSON.parse(localStorage.getItem('signUpDetails'));
  onSubmit(form:NgForm){
    console.log(NgForm);
    console.log("*****",this.signUp)
    localStorage.setItem("signUpDetails",JSON.stringify(this.signUp))
    this.signUp= {email:'',password:'',username:''}
// this.signUp.reset(this.signUp.value);
   
  }
  abc(a:any){
    console.log(a)
  }

}
