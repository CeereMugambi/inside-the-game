import { Component, computed, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-playback-controls',
  styleUrl: './playback-controls.css',
  templateUrl: './playback-controls.html',
})
export class PlaybackControls {
    isPlaying = input.required<boolean>();
  revealedCount = input.required<number>();
  totalCount = input.required<number>();

  actionRequested = output<void>();

  progressPercent = computed(() =>
    this.totalCount() === 0 ? 0 : (this.revealedCount() / this.totalCount()) * 100,
  );

  buttonLabel = computed(() => {
    if (this.isPlaying()) return 'Pause';
    if (this.revealedCount() >= this.totalCount()) return 'Replay match';
    if (this.revealedCount() === 0) return 'Play match';
    return 'Resume';
  });
}

