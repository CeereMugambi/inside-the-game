import { Component, input, output } from '@angular/core';
import { CommentaryLanguageCode, LanguageOption } from '../models/match';

@Component({
  imports: [],
  selector: 'app-language-switcher',
  styleUrl: './language-switcher.css',
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcher {
  languageOptions = input.required<LanguageOption[]>();
  selectedLanguageCode = input.required<CommentaryLanguageCode>();

  languageSelected = output<CommentaryLanguageCode>();
}

