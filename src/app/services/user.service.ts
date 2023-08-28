import { Injectable } from "@angular/core";

// @Injectable({
//   providedIn: 'root'
// })
export class UserService{
  public loginUser={
    name:"John Doe",
    id:123
  }
  constructor(){

  }

  getLoginUser(){
    return this.loginUser;
  }
}
