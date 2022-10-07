import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate-button',
  templateUrl: './translate-button.component.html',
  styleUrls: ['./translate-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslateButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
