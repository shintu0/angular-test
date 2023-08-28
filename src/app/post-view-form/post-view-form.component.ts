import { Component } from '@angular/core';

@Component({
  selector: 'app-post-view-form',
  templateUrl: './post-view-form.component.html',
  styleUrls: ['./post-view-form.component.css']
})
export class PostViewFormComponent {

  public post={
    title:'',
    postDetail:'',
    postImageUrl:'',
    postLink:'',
    viewBackground:false
  }

  constructor(){

  }

  onViewBackground(){

  }



}
