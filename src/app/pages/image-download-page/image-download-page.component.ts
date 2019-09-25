import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service';
import { Observable } from 'rxjs';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'app-image-download-page',
  templateUrl: './image-download-page.component.html',
  styleUrls: ['./image-download-page.component.css']
})
export class ImageDownloadPageComponent implements OnInit {
  public images$: Observable<Image[]>;

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
  this.images$ = this.data.downloadPhoto();
  console.log("images", this.images$);
  }

}
