import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonConstant } from '../../../../core/common-constant/constant';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departments',
  imports: [FormsModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent implements OnInit{
  @Output()  outSubDepartment  = new EventEmitter<any>()
  @Output()  outDepartment  = new EventEmitter<any>()
  public departments = CommonConstant.Departments;
  public selectedDepartment: any;
  public subDepartmentArr: any[] = [];
  public allSelectedSubDepartment:any [] = [];
  public selectedSubDepartment: string = '';
  public selectedSubDepartmentsMap: { [key: string]: boolean } = {};
  
  constructor () {}
  ngOnInit(): void {
   
  }
  
  public onDepartmentChange(item: any) {
    this.selectedDepartment = item;
    const currentObj = this.departments.find(dep => dep.name === item);
    this.subDepartmentArr = currentObj?.subDepartment || [];
     this.selectedSubDepartmentsMap = {};
    this.allSelectedSubDepartment = [];
    console.log(this.allSelectedSubDepartment);
    this.outDepartment.emit(this.selectedDepartment);
  } 
  public onSubDepartmentChange(subDepartment: any) {
   const isSelected = this.selectedSubDepartmentsMap[subDepartment];

  if (isSelected) {
    // Add to array if not already present
    if (!this.allSelectedSubDepartment.includes(subDepartment)) {
      this.allSelectedSubDepartment.push(subDepartment);
      this.outSubDepartment.emit(this.allSelectedSubDepartment);
    }
  } else {
    // Remove from array if unchecked
    this.allSelectedSubDepartment = this.allSelectedSubDepartment.filter(item => item !== subDepartment);
      this.outSubDepartment.emit(this.allSelectedSubDepartment);
  }


  console.log(this.allSelectedSubDepartment);
    
  }
}
