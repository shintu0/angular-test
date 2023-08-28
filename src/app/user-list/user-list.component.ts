import { Component } from '@angular/core';

type User={
  name:string,
  email:string,
  address:string
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  public userForm:User={
    name:'',
    email:'',
    address:''
  }
  public userList:User[]=[];

  onAddUser(){
    this.userList.push(this.userForm);
    this.userForm={
      name:'',
      email:'',
      address:''
    }
  }

  onRemoveUser(index:number){
    this.userList=this.userList.filter((e:User,i:number)=>i!==index);
  }


}
