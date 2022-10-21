import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ChangeTitleService extends TitleStrategy {
  constructor(private translateService: TranslateService, private title: Title) {
    super();
  }

  public override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.translateService.get(title).subscribe((translatedTitle) => {
        this.title.setTitle(`CVG  ${translatedTitle}`);
      });
    } else {
      this.title.setTitle('CVG');
    }
  }
}
