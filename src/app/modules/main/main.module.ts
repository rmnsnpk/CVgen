import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { MainRoutingModule } from './main.routing.module';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    SubheaderComponent,
    MenuComponent,
  ],
  imports: [MainRoutingModule],
})
export class MainModule {}
