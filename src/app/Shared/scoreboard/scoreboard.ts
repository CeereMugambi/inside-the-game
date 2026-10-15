import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-scoreboard',
  styleUrl: './scoreboard.css',
  templateUrl: './scoreboard.html',
})
export class Scoreboard {
  homeTeamName = input.required<string>();
  awayTeamName = input.required<string>();
  homeScore = input.required<number>();
  awayScore = input.required<number>();
  minutePlayed = input.required<number>();

  getTeamInitials(teamName: string) {
    return teamName
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2);
  }
}

