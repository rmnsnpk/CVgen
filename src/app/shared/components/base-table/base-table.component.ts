import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITableColumns } from '../../interfaces/table-columns';
@Component({
  selector: 'cvg-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTableComponent {
  @Input() public uniqueNode = 'id';

  @Input() public data: any[];

  @Input() public columns: ITableColumns[];

  @Output() public rowClicked = new EventEmitter<string>();

  public trackById(index: any, item: any): string {
    return item.id;
  }

  public openRow(id: string) {
    this.rowClicked.emit(id);
  }
}
