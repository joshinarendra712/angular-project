import { CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit{
 skillForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      skills: this.fb.array([]),
      newSkill: ['', Validators.required]
    });
  }
  ngOnInit(): void {
   
  }

  // Getter for easy access
  get skillsArray(): FormArray {
    return this.skillForm.get('skills') as FormArray;
  }

  // Add skill from input
  addSkill() {
    if (this.skillForm.get('newSkill')?.invalid) return;
    this.skillsArray.push(new FormControl(this.skillForm.value.newSkill, Validators.required));
    this.skillForm.get('newSkill')?.reset();
  }

  // Remove skill at index
  removeSkill(index: number) {
    this.skillsArray.removeAt(index);
  }

  // Edit a skill inline
  editSkill(index: number) {
    const updatedValue = prompt('Edit skill:', this.skillsArray.at(index).value);
    if (updatedValue !== null && updatedValue.trim() !== '') {
      this.skillsArray.at(index).setValue(updatedValue.trim());
    }
  }

  // Submit all skills
  saveAll() {
    console.log('Skills:', this.skillForm.value.skills);
    alert('Skills saved: ' + JSON.stringify(this.skillForm.value.skills));
  }

}
