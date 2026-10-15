import { Component, input } from '@angular/core';
import { MatchStatistic } from '../models/match';


@Component({
  imports: [],
  selector: 'app-stats-panel',
  styleUrl: './stats-panel.css',
  templateUrl: './stats-panel.html',
})
export class StatsPanel {
    statistics = input.required<MatchStatistic[]>();
}

