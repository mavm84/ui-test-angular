import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

export type RulingModel = {
  name: string,
  description: string,
  lastUpdated: string,
  category: string,
  picture: string,
  vote: string,
  selected?: string,
  votes: {
    positive: number,
    negative: number
  }
};

@Component({
  selector: 'app-previous-rulings',
  templateUrl: './previous-rulings.component.html',
  styleUrls: ['./previous-rulings.component.scss']
})
export class PreviousRulingsComponent implements OnInit {
  previousRulings: RulingModel[] = [];
  selectedLayout = 'Grid';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getRulingsData();
  }

  getRulingsData(): void {
    const storedData = localStorage.getItem('RULINGS_DATA');
    this.previousRulings = storedData ? JSON.parse(storedData) : [];

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

  toggleVote(ruling: any, selection: string): void {
    ruling.selected = selection;
  }

  onVote(ruling: any): void {
    if (ruling.vote === '') {
      const currentRuling = this.previousRulings.find(x => x.name === ruling.name);

      if (currentRuling) {
        currentRuling.vote = ruling.selected;
        if (ruling.selected === 'positive') {
          currentRuling.votes.positive++;
        } else {
          currentRuling.votes.negative++;
        }

        delete currentRuling.selected;
        localStorage.setItem('RULINGS_DATA', JSON.stringify(this.previousRulings));
      }
    } else {
      ruling.vote = '';
    }
  }

  changeLayout(layout: string): void {
    this.selectedLayout = layout;
  }
}
