import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangeTitleService {
  constructor(private titleService: Title, private translateService: TranslateService, private router: Router) {}

  changeTitleSubscriber() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route.snapshot.data['title'];
          }
          return routeTitle;
        }),
        switchMap((routeTitle) => {
          return this.translateService.get(routeTitle);
        }),
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(`CVG - ${title}`);
        }
      });
  }

  changeTitle() {
    let route: ActivatedRoute = this.router.routerState.root;
    let routeTitle = '';
    while (route.firstChild) {
      route = route.firstChild;
    }
    if (route.snapshot.data['title']) {
      routeTitle = route.snapshot.data['title'];
    }
    if (routeTitle) {
      this.translateService.get(routeTitle).subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(`CVG - ${title}`);
        }
      });
    }
  }
}
