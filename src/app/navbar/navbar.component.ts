import { Component, OnInit } from '@angular/core';
import './navbar.model';
import {MenuItem} from './navbar.model';

const config: MenuItem[] = [
  {
    title: '总览',
    id: 'menu-overview'
  },
  {
    title: '商品大类',
    id: 'menu-random-walker'
  },
  {
    title: '算法配置',
    id: 'menu-method'
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
