import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SubheaderComponent,
    MenuComponent,
    MainComponent,
  ],
  imports: [CommonModule],
})
export class MainModule {}
