import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageUploadPageComponent } from './pages/image-upload-page/image-upload-page.component';
import { ImageDownloadPageComponent } from './pages/image-download-page/image-download-page.component';
import { FramePageComponent } from './pages/master/frame-page';
import { ImageMultipleUploadPageComponent } from './pages/image-upload-multiple-page/image-upload-multiple-page.component';

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
    },
    {
      path: 'downloadMultiple',
      component: ImageMultipleUploadPageComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
