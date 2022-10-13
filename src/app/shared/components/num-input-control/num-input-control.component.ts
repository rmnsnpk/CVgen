import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { BaseControl } from '../../classes/base-control';
@Component({
  selector: 'cvg-num-input-control',
  standalone: true,
  templateUrl: './num-input-control.component.html',
  styleUrls: ['./num-input-control.component.scss'],

  imports: [NzInputNumberModule, ReactiveFormsModule, CommonModule],
})
export class NumInputControlComponent extends BaseControl implements OnInit {
  numInputControl = this.baseControl;
}
