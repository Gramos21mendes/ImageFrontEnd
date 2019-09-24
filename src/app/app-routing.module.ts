import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageUploadPageComponent } from './pages/image-upload-page/image-upload-page.component';
import { ImageDownloadPageComponent } from './pages/image-download-page/image-download-page.component';
import { FramePageComponent } from './pages/master/frame-page';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [{
      path: '',
      component: ImageUploadPageComponent
    }, {
      path: 'download',
      component: ImageDownloadPageComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
