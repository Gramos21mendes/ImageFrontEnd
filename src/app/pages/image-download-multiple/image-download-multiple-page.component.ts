import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from 'src/app/models/Image';
import { DataService } from 'src/app/services/data-service';
import { saveAs } from 'file-saver';

@Component({
    selector: 'app-image-download-multiple-page',
    templateUrl: './image-download-multiple-page.component.html'
})

export class ImageMultipleDownloadPageComponent implements OnInit {
    public images$: Observable<Image[]>;
    public ids: string[] = [];
    public images: Image[] = [];
    constructor(private data: DataService) {

    }

    ngOnInit() {
        this.images$ = this.data.listImages();
        console.log("images", this.images$);
    }

    downloadImages(images: Observable<Image[]>) {
        images.subscribe(images => {
            debugger;
            this.ids = images.map(image => { return image.ImageId });
            this.data.downloadImages(this.ids).subscribe(response => {
                const data = new Blob([response], { type: "application/zip" });
                saveAs(data);
            });
        });
    }
}