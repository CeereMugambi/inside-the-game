import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FeatureHighlight {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  featureHighlights: FeatureHighlight[] = [
    { icon: '🎙️', title: 'Live commentary', description: 'Match events turned into commentary as the game unfolds, in the tone you choose.' },
    { icon: '🔍', title: 'Key moments explained', description: 'See why a goal, a card or a substitution mattered, backed by the match data.' },
    { icon: '🌍', title: 'Fans in every language', description: 'Recaps and commentary written for fans around the world, including Kiswahili.' },
  ];

  supportedLanguages = ['English', 'Kiswahili', 'Français', 'Español'];

  scrollToFeatures() {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  }
}