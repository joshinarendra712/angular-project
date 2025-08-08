import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { SimpleFormComponent } from './components/reactive-form/simple-form/simple-form.component';
import { FormTestComponent } from './components/reactive-form/form-test/form-test.component';

export const routes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
	},
	{
		path: 'reactive-form',
		component: ReactiveFormComponent,
		children: [

		],
	},
	{
		path: 'directive',
		component: AdminComponent
	},
	{
		path: 'pipe',
		component: PipeComponent,
	},
	{
		path: 'simple-form',
		component: SimpleFormComponent
	},
	{
		path : 'form-test',
		component : FormTestComponent
	}
];
