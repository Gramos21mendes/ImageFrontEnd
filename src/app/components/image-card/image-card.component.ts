import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/Image';
import { DataService } from 'src/app/services/data-service';
import { saveAs} from 'file-saver';

@Component({
    selector: 'app-image-card',
    templateUrl: './image-card.component.html'
})
export class ImageCardComponent implements OnInit {
    @Input() image: Image;
    constructor(
        private data: DataService
    ) {

    }

    ngOnInit() {

    }

    downloadImage(image: Image) {
        this.data.downloadImage(image.ImageId).subscribe(response => {
            const data = new Blob([response], { type: "image/jpeg"});
            saveAs(data, image.ImageName);
            console.log(data);
        });
    }
}