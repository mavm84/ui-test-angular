import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-current-rule',
  templateUrl: './current-rule.component.html',
  styleUrls: ['./current-rule.component.scss']
})
export class CurrentRuleComponent implements OnInit {

  currentRule = {
    picture: '/assets/img/pope-francis.@2x.png',
      name: 'Pope Francis',
      description: `He's talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)`,
      endDate: '30/06/2022'
  };
  
  constructor() {
  }

  ngOnInit(): void {

  }

  getRemainingDays(date: string): number {
    return moment(date, 'DD/MM/YYYY').diff(moment(), 'days') + 1;
  }

}
