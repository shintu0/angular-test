import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  public title:string='List of Posts';
  public message:any;
  @Input() public dataFromParent:string='';
  public dataForChild="From post to post-list";

  getChildData(eventEmitData:any):void{
    console.log(">>>>>>>>>>>EVENT in Parent>>>>>>>>>>>>>>")
    console.log(eventEmitData);
    this.message=eventEmitData.message;
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  }

}
