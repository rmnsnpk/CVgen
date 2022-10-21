import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TableColumns } from '../../interfaces/table-columns';
@Component({
  selector: 'cvg-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BaseTableComponent {
  @Input() public data: any[];

  @Input() public columns: TableColumns[];

  @Output() public rowClicked = new EventEmitter<any>();

  public trackById(index: any, item: any): string {
    return item.id;
  }

  public openRow(event: any) {
    this.rowClicked.emit(event);
  }
}
