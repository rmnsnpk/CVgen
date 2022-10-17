import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cvg-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsFormComponent {}
