import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePginationComponent } from './components/page-pgination/page-pgination.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



@NgModule({
	declarations: [
		PagePginationComponent,
		MenuComponent,
		ToolbarComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		FontAwesomeModule
	],
	exports: [
		PagePginationComponent,
		MenuComponent,
		ToolbarComponent
	]
})
export class UiModuleModule { }
