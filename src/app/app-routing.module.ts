import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './page-module/components/main/main.component';
import { PdfEditorComponent } from './page-module/components/pdf-editor/pdf-editor.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, data: {title: 'Home'}
  },
  {
    path: 'products', component: MainComponent, data: {title: 'Products'}
  },
  {
    path: 'edit-pdf', component: PdfEditorComponent,  data: {title: 'Edit PDF'}
  },
  {
    path: 'support', component: MainComponent, data: {title: 'Support'}
  },
  {
    path: 'websites', component: MainComponent, data: {title: 'Websites'}
  },
  {
    path: 'about', component: MainComponent, data: {title: 'About'}
  },
  {
    path: 'home', component: MainComponent, data: {title: 'Home'}
  },
  {
    path: 'free-support', component: MainComponent, data: {title: 'Free Support'}
  },
  {
    path: 'free-consulting', component: MainComponent, data: {title: 'Free Consulting'}
  },
  {
    path: 'blog', component: MainComponent, data: {title: 'Blog'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
