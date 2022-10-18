import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LanguagesList } from '../../enums/languages-list.enum';

@Component({
  selector: 'cvg-translate-button',
  templateUrl: './translate-button.component.html',
  styleUrls: ['./translate-button.component.scss'],
  imports: [NzIconModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TranslateButtonComponent {
  constructor(private translateService: TranslateService) {}

  click() {
    if (this.translateService.currentLang === LanguagesList.English) {
      this.translateService.use('ru');
    } else {
      this.translateService.use('en');
    }
    console.log(this.translateService.currentLang);
  }
}
