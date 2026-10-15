import { Component, computed, input } from '@angular/core';
import { CommentaryLine } from '../models/match';

@Component({
  imports: [],
  selector: 'app-commentary-feed',
  styleUrl: './commentary-feed.css',
  templateUrl: './commentary-feed.html',
})
export class CommentaryFeed {
  commentaryLines = input.required<CommentaryLine[]>();

  newestFirstLines = computed(() => [...this.commentaryLines()].reverse());
}

