import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewFormComponent } from './post-view-form.component';

describe('PostViewFormComponent', () => {
  let component: PostViewFormComponent;
  let fixture: ComponentFixture<PostViewFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostViewFormComponent]
    });
    fixture = TestBed.createComponent(PostViewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
