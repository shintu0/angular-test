import {  Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  title = 'angular-test';
  public dataForChild="Some Data from Parent";
  public dataFromViewChild:any;
  @ViewChild(PostComponent) private postComponent:any;

  constructor(private userService:UserService,private postService:PostService){

  }

  ngAfterContentChecked(): void {
    alert(this.userService.getLoginUser().name);
    alert(this.postService.getPost().title);
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    // console.log(this.postComponent);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    this.dataFromViewChild={...this.postComponent};

  }
}
