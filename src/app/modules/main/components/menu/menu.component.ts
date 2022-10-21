import { EMPLOYEE_PATH, PROJECTS_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cvg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  isCollapsed = false;

  public readonly employeePath = EMPLOYEE_PATH;

  public readonly projectsPath = PROJECTS_PATH;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
