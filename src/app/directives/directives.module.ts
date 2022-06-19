import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElapsedTimePipe } from './elapsed-time.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ElapsedTimePipe
  ],
  exports: [
    ElapsedTimePipe
  ]
})
export class DirectivesModule { }
