import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  public title:string='List of Posts';
  @Input() public dataFromParent:string='';
  public dataForChild="From post to post-list";

}
