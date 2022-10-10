import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cvg-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationPageComponent {}
