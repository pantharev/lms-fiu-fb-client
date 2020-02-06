import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'},
  { path: 'courses', loadChildren: './modules/course/course.module#CourseModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
