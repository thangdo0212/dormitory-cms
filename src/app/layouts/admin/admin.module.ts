import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import {RouterModule} from '@angular/router';
import { AdminNavV2Component } from './admin-nav-v2/admin-nav-v2.component';


@NgModule({
  declarations: [AdminFooterComponent, AdminHeaderComponent, AdminNavComponent, AdminNavV2Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminNavComponent
  ]
})
export class AdminModule {
}
