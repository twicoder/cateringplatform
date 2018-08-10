import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import { MerchantmngComponent } from './merchantmng/merchantmng.component';
import { ConsumermngComponent } from './consumermng/consumermng.component';
import { ApplicationmngComponent } from './applicationmng/applicationmng.component';
import { StatisticComponent } from './statistic/statistic.component';

const routes: Routes = [
  // { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin', component: IndexComponent },
  { path: 'admin/merchant', component: MerchantmngComponent },
  { path: 'admin/consumer', component: ConsumermngComponent },
  { path: 'admin/application', component: ApplicationmngComponent },
  { path: 'admin/statistic', component: StatisticComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [IndexComponent, MerchantmngComponent, ConsumermngComponent, ApplicationmngComponent, StatisticComponent],
  exports: [ RouterModule,
  ]
})
export class AdminModule { }
