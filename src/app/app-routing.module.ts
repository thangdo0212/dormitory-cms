import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guard } from './core/guards/auth.guard';
import { AdminComponent } from './layouts/admin/admin.component';
import { ProjectAddMnComponent } from './pages/admin/project-add-mn/project-add-mn.component';
import { SyllabusMnComponent } from './pages/admin/syllabus-mn/syllabus-mn.component';
import { PagesModule } from './pages/pages.module';

const APP_ROUTES: Routes = [
  {
    path: '', component: AdminComponent, data: {title: 'Secure Views'}, children: [
      {path: 'admin/dashboard', component: SyllabusMnComponent},
      {path: 'admin/lesson', component: ProjectAddMnComponent},
    ], canActivate: [Guard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    PagesModule
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule {
}
