import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  public message:number=0;

  @Input() public dataFromParent:string='';
  @Output() messageEvent=new EventEmitter();

  onClick(event:Event){
    console.log(">>>>>>>>>>>Event in Child>>>>>>>>>>>>>>>>>>>")
    console.log(event);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    this.message++;
    this.messageEvent.emit({message:this.message});
  }

}
