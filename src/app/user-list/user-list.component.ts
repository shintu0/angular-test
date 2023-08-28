import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onAddUser(form:NgForm){
    console.table(form.value);
    const {name,email,address}=form.value;
    this.userList.push({name,email,address});
    form.reset();
  }

  onRemoveUser(index:number){
    this.userList=this.userList.filter((e:User,i:number)=>i!==index);
  }

  onChange(form:NgForm){
    console.log(form);
  }


}
