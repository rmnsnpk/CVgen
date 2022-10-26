import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';

@UntilDestroy()
@Injectable()
export class ChangeTitleService extends TitleStrategy {
  constructor(private translateService: TranslateService, private title: Title) {
    super();
  }

  public override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.translateService
        .get(title)
        .pipe(untilDestroyed(this))
        .subscribe((translatedTitle) => {
          this.title.setTitle(`CVG  ${translatedTitle}`);
        });
    } else {
      this.title.setTitle('CVG');
    }
  }
}
