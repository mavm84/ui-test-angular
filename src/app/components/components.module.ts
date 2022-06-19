import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '../directives/directives.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CurrentRuleComponent } from './current-rule/current-rule.component';
import { PreviousRulingsComponent } from './previous-rulings/previous-rulings.component';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CurrentRuleComponent,
    PreviousRulingsComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CurrentRuleComponent,
    PreviousRulingsComponent
  ]
})
export class ComponentsModule { }
