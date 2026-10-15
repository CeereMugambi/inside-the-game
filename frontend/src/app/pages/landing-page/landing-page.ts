import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideoShowcase } from '../../Shared/video-showcase/video-showcase';

interface HeroHighlight {
  value: string;
  label: string;
}

interface FeatureHighlight {
  icon: string;
  title: string;
  description: string;
}

interface HowItWorksStep {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink, VideoShowcase],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  sampleVideoSource = '/assets/videos/sample-football.mp4';

  heroHighlights: HeroHighlight[] = [
    { value: '4', label: 'languages' },
    { value: '11', label: 'event types tracked' },
    { value: 'Live', label: 'commentary and recaps' },
  ];

  featureHighlights: FeatureHighlight[] = [
    { icon: '🎙️', title: 'Live commentary', description: 'Match events turned into commentary as the game unfolds, in the tone you choose.' },
    { icon: '🔍', title: 'Key moments explained', description: 'See why a goal, a card or a substitution mattered, backed by the match data.' },
    { icon: '🌍', title: 'Fans in every language', description: 'Recaps and commentary written for fans around the world, including Kiswahili.' },
  ];

  howItWorksSteps: HowItWorksStep[] = [
    { icon: '📡', title: 'Match events arrive', description: 'Goals, cards, substitutions and shots stream in from the match data.' },
    { icon: '🧠', title: 'AI picks the key moments', description: 'Agents score every event and decide which ones deserve the spotlight.' },
    { icon: '🗣️', title: 'Stories in every language', description: 'Commentary and recaps are written in the tone and language you choose.' },
  ];

  supportedLanguages = ['English', 'Kiswahili', 'Français', 'Español'];

  scrollToFeatures() {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  }
}