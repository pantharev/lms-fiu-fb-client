import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/helpers/auth.guard';


const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'},
  { path: 'courses', loadChildren: './modules/course/course.module#CourseModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
