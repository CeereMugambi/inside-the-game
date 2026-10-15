import { EventType, Match, MatchMoment } from './models/match';

const IMPORTANCE_BY_EVENT_TYPE: Record<EventType, number> = {
  goal: 10,
  penalty: 8,
  red_card: 8,
  var_review: 6,
  shot_on_target: 4,
  save: 4,
  yellow_card: 3,
  shot_off_target: 2,
  substitution: 2,
  foul: 1,
  corner: 1,
};

const LATE_GAME_START_MINUTE = 80;
const LATE_GAME_BONUS = 2;
const MINIMUM_IMPORTANCE_FOR_MOMENT = 5;

export function detectKeyMoments(match: Match): MatchMoment[] {
  let homeGoalCount = 0;
  let awayGoalCount = 0;
  const keyMoments: MatchMoment[] = [];

  for (const matchEvent of match.events) {
    if (matchEvent.type === 'goal') {
      if (matchEvent.team === 'home') {
        homeGoalCount++;
      } else {
        awayGoalCount++;
      }
    }

    const lateGameBonus = matchEvent.minute >= LATE_GAME_START_MINUTE ? LATE_GAME_BONUS : 0;
    const importanceScore = IMPORTANCE_BY_EVENT_TYPE[matchEvent.type] + lateGameBonus;

    if (importanceScore >= MINIMUM_IMPORTANCE_FOR_MOMENT) {
      keyMoments.push({
        ...matchEvent,
        importanceScore,
        scoreAfterEvent: `${homeGoalCount}-${awayGoalCount}`,
      });
    }
  }

  return keyMoments;
}