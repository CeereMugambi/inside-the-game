import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_MATCH } from '../../Mock_data/mock-match';
import { Scoreboard } from '../../Shared/scoreboard/scoreboard';
import { StatsPanel } from '../../Shared/stats-panel/stats-panel';
import { EventType, MatchStatistic } from '../../Shared/models/match';
import { Timeline } from '../../Shared/timeline/timeline';


@Component({
  imports: [Scoreboard, StatsPanel,Timeline, RouterLink],
  selector: 'app-match-page',
  styleUrl: './match-page.css',
  templateUrl: './match-page.html',
})
export class MatchPage {
   match = signal(MOCK_MATCH);

  homeGoalCount = computed(() => this.countEventsForTeam('goal', 'home'));
  awayGoalCount = computed(() => this.countEventsForTeam('goal', 'away'));
  lastMinutePlayed = computed(() =>
    Math.max(...this.match().events.map((matchEvent) => matchEvent.minute)),
  );

  matchStatistics = computed<MatchStatistic[]>(() => [
    this.buildStatistic('Shots on target', 'shot_on_target'),
    this.buildStatistic('Corners', 'corner'),
    this.buildStatistic('Fouls', 'foul'),
    this.buildStatistic('Yellow cards', 'yellow_card'),
  ]);

  private countEventsForTeam(eventType: EventType, teamSide: 'home' | 'away') {
    return this.match().events.filter(
      (matchEvent) => matchEvent.type === eventType && matchEvent.team === teamSide,
    ).length;
  }

  private buildStatistic(label: string, eventType: EventType): MatchStatistic {
    const homeValue = this.countEventsForTeam(eventType, 'home');
    const awayValue = this.countEventsForTeam(eventType, 'away');
    const totalValue = homeValue + awayValue;
    const homeSharePercent = totalValue === 0 ? 50 : (homeValue / totalValue) * 100;
    return { label, homeValue, awayValue, homeSharePercent };
  }
}
