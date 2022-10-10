import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cvg-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
