import { Component, OnInit } from '@angular/core';
import './navbar.model';
import {MenuItem} from './navbar.model';

const config: MenuItem[] = [
  {
    title: '总览',
    id: 'menu-overview',
    children: [],
    link: ['']
  },
  {
    title: '商品大类',
    id: 'menu-main-class',
    children: [
      {
        title: '美妆',
        link: ['/'],
      },
      {
        title: '服饰',
        link: ['/']
      }
    ]
  },
  {
    title: '算法配置',
    id: 'menu-method',
    children: [
      {
        title: 'MA(2)',
        link: ['/']
      },
      {
        title: 'MA(3)',
        link: ['/']
      },
      {
        title: 'ARMA(2,1)',
        link: ['/']
      }
    ]
  }
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuActive: boolean;
  activeMenuId: string;
  config: MenuItem[] = config;

  constructor() { }

  ngOnInit() {
  }

}
