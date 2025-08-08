import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-simple-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.scss'
})
export class SimpleFormComponent {

  public employeeForm: FormGroup = {} as FormGroup

  constructor() {

  }

  ngOnInit(): void {
    this.employeeForm  = new FormGroup ({
      name : new FormControl(""),
      email : new FormControl(""),
      mobileNo : new FormControl(""),
      department : new FormControl(""),
      familyMembers : new FormArray([])
    })
  }

  get getFamilyList(){
    return this.employeeForm.controls['familyMembers'] as FormArray;
  }

  onSubmit(){
    console.log(this.employeeForm);
    
  }
}
