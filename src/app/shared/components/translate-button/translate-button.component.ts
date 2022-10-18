import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LanguagesList } from '../../enums/languages-list.enum';
import { ChangeTitleService } from '../../services/change-title.service';

@Component({
  selector: 'cvg-translate-button',
  templateUrl: './translate-button.component.html',
  styleUrls: ['./translate-button.component.scss'],
  imports: [NzIconModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TranslateButtonComponent {
  constructor(private translateService: TranslateService, private changeTitle: ChangeTitleService) {}

  changeLanguage() {
    if (this.translateService.currentLang === LanguagesList.English) {
      this.translateService.use(LanguagesList.Russian);
    } else {
      this.translateService.use(LanguagesList.English);
    }
    setTimeout(() => {
      this.changeTitle.changeTitle();
    }, 3);
  }
}
