import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_MATCH } from '../../Mock_data/mock-match';
import { Scoreboard } from '../../Shared/scoreboard/scoreboard';
import { StatsPanel } from '../../Shared/stats-panel/stats-panel';
import { EventType, MatchStatistic } from '../../Shared/models/match';
import { Timeline } from '../../Shared/timeline/timeline';
import { PlaybackControls } from '../../Shared/playback-controls/playback-controls';

const MILLISECONDS_BETWEEN_EVENTS = 1000;

@Component({
  imports: [Scoreboard, StatsPanel,Timeline,PlaybackControls, RouterLink],
  selector: 'app-match-page',
  styleUrl: './match-page.css',
  templateUrl: './match-page.html',
})
export class MatchPage {
 match = signal(MOCK_MATCH);
  revealedEventCount = signal(MOCK_MATCH.events.length);
  isPlaying = signal(false);

  private playbackTimerId?: ReturnType<typeof setInterval>;

  totalEventCount = computed(() => this.match().events.length);
  visibleEvents = computed(() => this.match().events.slice(0, this.revealedEventCount()));
  hasFinished = computed(() => this.revealedEventCount() >= this.totalEventCount());

  homeGoalCount = computed(() => this.countEventsForTeam('goal', 'home'));
  awayGoalCount = computed(() => this.countEventsForTeam('goal', 'away'));
  lastMinutePlayed = computed(() => this.visibleEvents().at(-1)?.minute ?? 0);

  matchStatistics = computed<MatchStatistic[]>(() => [
    this.buildStatistic('Shots on target', 'shot_on_target'),
    this.buildStatistic('Corners', 'corner'),
    this.buildStatistic('Fouls', 'foul'),
    this.buildStatistic('Yellow cards', 'yellow_card'),
  ]);

  handlePlaybackAction() {
    if (this.isPlaying()) {
      this.pausePlayback();
      return;
    }
    if (this.hasFinished()) {
      this.revealedEventCount.set(0);
    }
    this.startPlayback();
  }

  ngOnDestroy() {
    clearInterval(this.playbackTimerId);
  }

  private startPlayback() {
    this.isPlaying.set(true);
    this.playbackTimerId = setInterval(() => {
      this.revealedEventCount.update((currentCount) => currentCount + 1);
      if (this.hasFinished()) {
        this.pausePlayback();
      }
    }, MILLISECONDS_BETWEEN_EVENTS);
  }

  private pausePlayback() {
    clearInterval(this.playbackTimerId);
    this.isPlaying.set(false);
  }

  private countEventsForTeam(eventType: EventType, teamSide: 'home' | 'away') {
    return this.visibleEvents().filter(
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
