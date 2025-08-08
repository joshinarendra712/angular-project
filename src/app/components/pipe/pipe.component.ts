import { Component } from '@angular/core';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';
import { FormsModule } from '@angular/forms';
import { EscapeHtmlPipe } from '../../core/pipes/escping.pipe';
import { Highlight } from 'ngx-highlightjs';
import { NgFor } from '@angular/common';
import { FilterPipe } from '../../core/pipes/filter.pipe';
@Component({
  selector: 'app-pipe',
  imports: [TruncatePipe, FormsModule,Highlight,NgFor,FilterPipe], 
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {

  longText = 'Angular is a popular front-end framework for building dynamic web applications.';
  charLimit = 20; // Default limit
  codeExample = `
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
	transform(value: any, limit: number = 20, trail: string = '...'): string {
		if (!value) {
			return '';
		} else {
			return value.length > limit ? value.substring(0, limit) + trail : value;
		}
	}
}

`;
codeExample2 = `
    function greet(name: string): string {
      return \`Hello, \${name}!\`;
    }
    console.log(greet('Angular'));
  `;

public searchTerm = '';
public  users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Alice Smith', email: 'alice@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' },
     { name: 'John Doe', email: 'john@example.com' },
    { name: 'Alice Smith', email: 'alice@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' }
  ];
}
