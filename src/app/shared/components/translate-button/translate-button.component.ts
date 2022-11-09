import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LanguagesList } from '../../enums/languages-list.enum';
import { ChangeTitleService } from '../../services/change-title.service';
import en from '@angular/common/locales/en';
import ru from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'cvg-translate-button',
  templateUrl: './translate-button.component.html',
  styleUrls: ['./translate-button.component.scss'],
  imports: [NzIconModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ChangeTitleService],
  standalone: true,
})
export class TranslateButtonComponent {
  constructor(private translateService: TranslateService, private changeTitleService: ChangeTitleService, private router: Router) {}

  changeLanguage() {
    if (this.translateService.currentLang === LanguagesList.English) {
      registerLocaleData(ru);
      this.translateService.use(LanguagesList.Russian);
    } else {
      this.translateService.use(LanguagesList.English);
      registerLocaleData(en);
    }
    this.changeTitleService.updateTitle(this.router.routerState.snapshot);
  }
}
