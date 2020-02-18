import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  modules = [{module_number: 1, module_title: "title"}];
  constructor() { }

  ngOnInit() {
  }

}
