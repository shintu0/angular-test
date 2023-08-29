import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  public reactiveFormGroup: FormGroup;

  constructor() {
    this.reactiveFormGroup = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      skills:new FormArray([]),
      contactDetails: new FormGroup({
        permanentAddress: new FormControl('', [Validators.required]),
        currentAddress: new FormControl(''),
      }),
    });
  }

  onSubmit(){
    // console.log(this.reactiveFormGroup.get('fullName')?.errors);
    console.log(this.reactiveFormGroup.value);
  }

  onAddSkills(skill:HTMLInputElement){
    (this.reactiveFormGroup.get('skills') as FormArray).push(new FormControl(skill.value));
    skill.value=''
  }
}
