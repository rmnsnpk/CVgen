import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'cvg-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubheaderComponent {
  constructor(private translate: TranslateService) {}
}
