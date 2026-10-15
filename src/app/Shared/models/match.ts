export type EventType =
  | 'goal' | 'penalty' | 'red_card' | 'var_review' | 'shot_on_target'
  | 'shot_off_target' | 'save' | 'yellow_card' | 'substitution' | 'foul' | 'corner';

export interface MatchEvent {
  id: number;
  minute: number;
  type: EventType;
  team: 'home' | 'away';
  player?: string;
  detail?: string;
}

export interface Match {
  home: string;
  away: string;
  events: MatchEvent[];
}

export interface MatchStatistic {
  label: string;
  homeValue: number;
  awayValue: number;
  homeSharePercent: number;
}