import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { Form, FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-reactive-form',
  imports: [ CommonModule, RouterLink],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }
}
