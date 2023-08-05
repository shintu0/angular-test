import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {


  public loginFormGroup=new FormGroup({
    email:new FormControl('',[Validators.pattern(/(([\w+\.])+([\+])?\w+\+?)+\@\w+(\.\w+){1,}/gmi),Validators.required]),
    password:new FormControl('',[Validators.minLength(6),Validators.required])
  })

  onSubmit(){
    console.log(">>>>>>>>>>>>>>>>");
    console.log(this.loginFormGroup.value);
    console.log(">>>>>>>>>>>>>>>>");
  }

}
