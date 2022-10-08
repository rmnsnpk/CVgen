import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cvg-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationFormComponent {}
