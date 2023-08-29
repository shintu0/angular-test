import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.css']
})
export class ReactiveFormBuilderComponent {
  public reactiveFormBuilder: FormGroup;

  constructor(private fb:FormBuilder) {

    this.reactiveFormBuilder=this.fb.group({
      fullName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      skills:this.fb.array([]),
      contactDetails:this.fb.group({
        permanentAddress:['',[Validators.required]],
        currentAddress:['']
      })
    })


  }

  onSubmit(){
    // console.log(this.reactiveFormBuilder.get('fullName')?.errors);
    console.log(this.reactiveFormBuilder.value);
  }

  onAddSkills(skill:HTMLInputElement){
    (this.reactiveFormBuilder.get('skills') as FormArray).push(new FormControl(skill.value));
    skill.value=''
  }
}
