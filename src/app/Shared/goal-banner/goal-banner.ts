import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-goal-banner',
  styleUrl: './goal-banner.css',
  templateUrl: './goal-banner.html',
})
export class GoalBanner {
  scorerName = input.required<string>();
  teamName = input.required<string>();
}

