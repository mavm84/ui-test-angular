import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-previous-rulings',
  templateUrl: './previous-rulings.component.html',
  styleUrls: ['./previous-rulings.component.scss']
})
export class PreviousRulingsComponent implements OnInit {
  previousRulings = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getRulingsData();
  }

  getRulingsData(): void {
    const storedData = localStorage.getItem('RULINGS_DATA');
    this.previousRulings = storedData ? JSON.parse(storedData) : [];
    console.log(this.previousRulings)

    if (!this.previousRulings.length) {
      this.dataService.getData().subscribe(data => {
        this.previousRulings = data;
        localStorage.setItem('RULINGS_DATA', JSON.stringify(this.previousRulings));
      })
    }
  }

  getPercentage(ruling: any, type: string): number {
    let result: number;
    if (type === 'positive') {
      result = (ruling.votes.positive * 100) / (ruling.votes.positive + ruling.votes.negative);
    } else {
      result = (ruling.votes.negative * 100) / (ruling.votes.positive + ruling.votes.negative)
    }

    return result;
  }

  getNegativeTrend(ruling: any): boolean {
    return ruling.votes.negative >= ruling.votes.positive;
  }

  toggleVote(ruling: any, selection: string):void {
    ruling.selected = selection;
  }

  onVote(ruling: any) : void {
    console.log(ruling)
  }
}
