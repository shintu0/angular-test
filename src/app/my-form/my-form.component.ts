import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {

  public loginModel:{email:string,password:string}={email:'',password:''};

  submit(data: NgForm){
    console.log(">>>>>>>>>>>>>>>>")
    console.log(data)
    console.log(">>>>>>>>>>>>>>>>")
  }

}
