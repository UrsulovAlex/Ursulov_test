import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedPageElementModule } from './shared-page-element/shared-page-element.module';
import { PageModuleModule } from './page-module/page-module.module';



@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedPageElementModule,
		AppRoutingModule,
		PageModuleModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { 
}
