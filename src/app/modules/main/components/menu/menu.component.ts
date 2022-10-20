import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMPLOYEE_PATH, PROJECTS_PATH } from 'src/app/shared/constants/routing-paths.consts';

@Component({
  selector: 'cvg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  isCollapsed = false;

  employees_path = EMPLOYEE_PATH.fullpath;

  projects_path = PROJECTS_PATH.fullpath;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
