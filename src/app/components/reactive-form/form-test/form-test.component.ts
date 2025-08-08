import { Component, inject, OnInit } from '@angular/core';
import { SkillsComponent } from "./skills/skills.component";
import { DepartmentsComponent } from "./departments/departments.component";
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-test',
  imports: [SkillsComponent, DepartmentsComponent, ReactiveFormsModule, FormsModule, JsonPipe],
  templateUrl: './form-test.component.html',
  styleUrl: './form-test.component.scss'
})
export class FormTestComponent implements OnInit{
private fb = inject(FormBuilder)
public employeeForm!:FormGroup

constructor () {}
ngOnInit(): void {
  this.buildForm();
}

private buildForm() {
  this.employeeForm = this.fb.group({
    firstName : ['', [Validators.required]],
    lastName : ['', [Validators.required]],
    email : ['', Validators.required],
    phone : ['', [Validators.required]],
    birthDate : ['', [Validators.required]],
    joiningDate : ['', [Validators.required]],
    skill : this.fb.array([]),
    department : ['', [Validators.required]],
    subDepartment : [[], Validators.required]
  })
}

public outDepartment(department: any) {
  this.employeeForm.controls?.['department'].setValue(department);
this.employeeForm.controls?.['subDepartment'].setValue([])
}

public outSubDepartment(subDepartment:any) {
  console.log(subDepartment);
  
 const arr = this.employeeForm.controls?.['subDepartment'].setValue(subDepartment)
 
}
}
