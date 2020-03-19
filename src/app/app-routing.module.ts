import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/helpers/auth.guard';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  { path: 'courses', loadChildren: () => import('./modules/course/course.module').then(m => m.CourseModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
