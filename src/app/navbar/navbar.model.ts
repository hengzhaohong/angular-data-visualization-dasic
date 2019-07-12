import {RouterLink, RouterLinkWithHref} from '@angular/router';

export interface MenuItem {
  title: string;
  id: string;
  children: MenuItemChild[]; // 若为空，则需指定 children 为空数组
  link?: string[]; // routerLink
}

export interface MenuItemChild {
  title: string;
  link: string[]; // routerLink
}
