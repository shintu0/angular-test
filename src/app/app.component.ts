import {  Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  public dataForChild="Some Data from Parent";
  public dataFromViewChild:any;
  @ViewChild(PostComponent) private postComponent:any;

  ngAfterContentChecked(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(this.postComponent);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    this.dataFromViewChild={...this.postComponent};

  }
}
