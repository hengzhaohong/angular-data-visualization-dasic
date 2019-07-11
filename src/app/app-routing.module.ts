import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then(mod => mod.StatusModule)
  },
  {
    path: 'price',
    loadChildren: () => import('./price/price.module').then(mod => mod.PriceModule)
  },
  {
    path: '',
    redirectTo: '/price',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // = true only for debug purposes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
