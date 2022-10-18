import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cvg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  isCollapsed = false;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  maxWidthClassChanger(): any {
    if (this.isCollapsed) {
      return { 'min-width': '0' };
    } else {
      return { 'min-width': '250px' };
    }
  }
}
