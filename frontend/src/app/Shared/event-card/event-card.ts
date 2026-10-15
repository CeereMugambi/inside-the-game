import { Component, computed, input } from '@angular/core';
import { EVENT_ICONS, isHighlightedEvent } from '../models/event-display';
import { MatchEvent } from '../models/match';

@Component({
  imports: [],
  selector: 'app-event-card',
  styleUrl: './event-card.css',
  templateUrl: './event-card.html',
})
export class EventCard {
   matchEvent = input.required<MatchEvent>();

  eventIcon = computed(() => EVENT_ICONS[this.matchEvent().type]);
  eventTitle = computed(() => this.matchEvent().type.replace('_', ' '));
  isHighlighted = computed(() => isHighlightedEvent(this.matchEvent().type));
}

