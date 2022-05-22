import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UiModuleModule } from '../ui-module/ui-module.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UiModuleModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedPageElementModule { }
