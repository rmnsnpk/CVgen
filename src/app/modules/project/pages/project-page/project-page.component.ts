import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
 selector: 'cvg-project-page',
 templateUrl: './project-page.component.html',
 styleUrls: ['./project-page.component.scss'],
 changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPageComponent {}
