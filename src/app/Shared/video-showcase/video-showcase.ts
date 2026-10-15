import { Component, input, signal } from '@angular/core';

interface PlayerDot {
  teamSide: 'home' | 'away';
  leftPercent: number;
  topPercent: number;
  driftDelaySeconds: number;
}
@Component({
  imports: [],
  selector: 'app-video-showcase',
  styleUrl: './video-showcase.css',
  templateUrl: './video-showcase.html',
})
export class VideoShowcase {
  videoSource = input.required<string>();
  posterImage = input('');

  isVideoReady = signal(false);
  isVideoPlaying = signal(false);

  shouldAutoplay = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  playerDots: PlayerDot[] = [
    { teamSide: 'home', leftPercent: 18, topPercent: 30, driftDelaySeconds: 0 },
    { teamSide: 'home', leftPercent: 32, topPercent: 62, driftDelaySeconds: 0.6 },
    { teamSide: 'home', leftPercent: 44, topPercent: 38, driftDelaySeconds: 1.2 },
    { teamSide: 'away', leftPercent: 58, topPercent: 58, driftDelaySeconds: 0.3 },
    { teamSide: 'away', leftPercent: 72, topPercent: 32, driftDelaySeconds: 0.9 },
    { teamSide: 'away', leftPercent: 82, topPercent: 64, driftDelaySeconds: 1.5 },
  ];

  handleVideoReady() {
    this.isVideoReady.set(true);
  }

  handleVideoError() {
    this.isVideoReady.set(false);
  }

  toggleVideoPlayback(videoElement: HTMLVideoElement) {
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }
}

