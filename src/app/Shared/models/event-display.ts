import { EventType } from './match';

export const EVENT_ICONS: Record<EventType, string> = {
  goal: '⚽',
  penalty: '🎯',
  red_card: '🟥',
  yellow_card: '🟨',
  var_review: '📺',
  shot_on_target: '💥',
  shot_off_target: '↗',
  save: '🧤',
  substitution: '🔁',
  foul: '🚫',
  corner: '🚩',
};

const HIGHLIGHTED_EVENT_TYPES: EventType[] = ['goal', 'penalty', 'red_card'];

export function isHighlightedEvent(eventType: EventType): boolean {
  return HIGHLIGHTED_EVENT_TYPES.includes(eventType);
}