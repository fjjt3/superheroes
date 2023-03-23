import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/form/form.component';
import { AntiHeroComponent } from './anti-hero.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    FormComponent,
    AntiHeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AntiHeroModule { }
