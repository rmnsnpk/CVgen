import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './pages/main.component';

@NgModule({
  declarations: [HeaderComponent, SubheaderComponent, MenuComponent, MainComponent],
  imports: [CommonModule],
})
export class MainModule {}
