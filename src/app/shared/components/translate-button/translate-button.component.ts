import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
 selector: 'cvg-translate-button',
 templateUrl: './translate-button.component.html',
 styleUrls: ['./translate-button.component.scss'],
 changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslateButtonComponent {}
