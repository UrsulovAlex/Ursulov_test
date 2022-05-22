import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { PdfEditorComponent } from './components/pdf-editor/pdf-editor.component';
import { UiModuleModule } from '../ui-module/ui-module.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    MainComponent,
    PdfEditorComponent
  ],
  imports: [
    CommonModule,
    UiModuleModule,
    FontAwesomeModule
  ]
})
export class PageModuleModule { }
