import { Component, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { DataService } from 'src/app/services/data-service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-image-upload-page',
    templateUrl: './image-upload-multiple-page.component.html',
    styleUrls: ['./image-upload-multiple-page.component.css']
})

export class ImageMultipleUploadPageComponent implements OnInit {
    public uploader: FileUploader = new FileUploader({});
    public hasBaseDropZoneOver: boolean = false;
    private _success = new Subject<string>()
    staticAlertClosed = false;
    successMessage: string;

    constructor(private data: DataService) {
    }

    ngOnInit() {
        setTimeout(() => this.staticAlertClosed = true, 20000);
    
        this._success.subscribe((message) => this.successMessage = message);
        this._success.pipe(
          debounceTime(5000)
        ).subscribe(() => {
        this.successMessage = null;
          location.reload();
        }
        );
      }

    show() {
        console.log("Guilherme");
        this._success.next(`${new Date()} - Foto Enviada com Sucesso !`);
      }

    fileOverBase(event): void {
        this.hasBaseDropZoneOver = event;
    }

    getFiles(): FileLikeObject[] {
        return this.uploader.queue.map((fileItem) => fileItem.file);
    }

    uploadDownload() {
        let files = this.getFiles();
        let formDatas = [];
        files.forEach((file) => {
            let formData = new FormData();
            formData.append('file', file.rawFile, file.name);
        })

        this.data.uploadImages(formDatas).subscribe(event => {
            this.show();
        });
    }

}