import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '../directives/directives.module';

import { HeaderComponent } from './header/header.component';
import { CurrentRuleComponent } from './current-rule/current-rule.component';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [
    HeaderComponent,
    CurrentRuleComponent
  ],
  exports: [
    HeaderComponent,
    CurrentRuleComponent
  ]
})
export class ComponentsModule { }
