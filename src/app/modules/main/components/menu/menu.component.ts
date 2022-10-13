import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cvg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() isMenuVisible: boolean;

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

  // constructor(@Optional() private mainPageComponent: MainPageComponent) {}

  // changeVisibility() {
  //   return this.mainPageComponent.expandMenu();
  // }
}
