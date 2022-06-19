import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '../directives/directives.module';

import { HeaderComponent } from './header/header.component';
import { CurrentRuleComponent } from './current-rule/current-rule.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [
    HeaderComponent,
    CurrentRuleComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CurrentRuleComponent
  ]
})
export class ComponentsModule { }
