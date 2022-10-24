import { NgModule } from '@angular/core';
import { BaseTableComponent } from './base-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BaseTableComponent],
  imports: [NzTableModule, CommonModule, FormsModule],
  exports: [BaseTableComponent],
})
export class BaseTableModule {}
