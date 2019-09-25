import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploadPageComponent } from './pages/image-upload-page/image-upload-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageDownloadPageComponent } from './pages/image-download-page/image-download-page.component';
import { FramePageComponent } from './pages/master/frame-page';
import { NavBarComponent } from './components/shared/navbar.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageMultipleUploadPageComponent } from './pages/image-upload-multiple-page/image-upload-multiple-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadPageComponent,
    ImageDownloadPageComponent,
    FramePageComponent,
    NavBarComponent,
    ImageCardComponent,
    ImageMultipleUploadPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
