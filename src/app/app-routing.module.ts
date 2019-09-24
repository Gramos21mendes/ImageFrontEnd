import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageUploadPageComponent } from './pages/image-upload-page/image-upload-page.component';


const routes: Routes = [{
  path: '',
  component: ImageUploadPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
