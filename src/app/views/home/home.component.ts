import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAdClose = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.isAdClose = true;
  }

}
