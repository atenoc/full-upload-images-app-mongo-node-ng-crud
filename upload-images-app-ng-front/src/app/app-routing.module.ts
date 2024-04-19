import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';


const routes: Routes = [
  { path: '', redirectTo:'/photos', pathMatch:'full'},
  { path: 'photos', component: PhotoListComponent},
  { path: 'photos/new', component: PhotoFormComponent},
  { path: 'photos/:id', component: PhotoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
