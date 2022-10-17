import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'cvg-translate-button',
  templateUrl: './translate-button.component.html',
  styleUrls: ['./translate-button.component.scss'],
  imports: [NzIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TranslateButtonComponent {
  constructor(private translateService: TranslateService) {}

  isEnglish = true;

  click() {
    if (this.isEnglish) {
      this.translateService.currentLang = 'ru';
      this.isEnglish = !this.isEnglish;
    } else {
      this.translateService.currentLang = 'en';
      this.isEnglish = !this.isEnglish;
    }
    console.log(this.translateService.currentLang);
  }
}
