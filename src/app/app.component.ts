import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesList } from './shared/enums/languages-list.enum';

@Component({
  selector: 'cvg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang(LanguagesList.English);
    translateService.use(LanguagesList.English);
  }
}
