import { NgModule } from '@angular/core';
import { BaseTableComponent } from './base-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BaseTableComponent],
  imports: [NzTableModule, CommonModule, FormsModule, TranslateModule],
  exports: [BaseTableComponent],
})
export class BaseTableModule {}
