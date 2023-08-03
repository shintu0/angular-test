import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {


  public loginFormGroup=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })

  onSubmit(){
    console.log(">>>>>>>>>>>>>>>>");
    console.log(this.loginFormGroup.value);
    console.log(">>>>>>>>>>>>>>>>");
  }

}
