import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {

  constructor(private router:Router){

  }

  onRegisterClick(){
    this.router.navigate(['register'])
  }

}
