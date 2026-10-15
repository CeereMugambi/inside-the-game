import { Component, input } from '@angular/core';
import { MatchRecap } from '../models/match';

@Component({
  imports: [],
  selector: 'app-recap-card',
  styleUrl: './recap-card.css',
  templateUrl: './recap-card.html',
})
export class RecapCard {
   recap = input.required<MatchRecap>();
}
