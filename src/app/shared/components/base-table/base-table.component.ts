import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cvg-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTableComponent {}
