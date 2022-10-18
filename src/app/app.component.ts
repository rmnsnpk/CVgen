import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesList } from './shared/enums/languages-list.enum';
import { ChangeTitleService } from './shared/services/change-title.service';

@Component({
  selector: 'cvg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService, private changeTitle: ChangeTitleService) {
    translateService.setDefaultLang(LanguagesList.English);
    translateService.use(LanguagesList.English);
  }

  ngOnInit() {
    this.changeTitle.changeTitleSubscriber();
  }
}
