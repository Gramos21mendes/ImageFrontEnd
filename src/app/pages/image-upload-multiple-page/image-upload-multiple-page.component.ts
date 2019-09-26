import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { DataService } from 'src/app/services/data-service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-image-upload-multiple-page',
  templateUrl: './image-upload-multiple-page.component.html',
  styleUrls: ['./image-upload-multiple-page.component.css']
})

export class ImageMultipleUploadPageComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  private _success = new Subject<string>()
  staticAlertClosed = false;
  successMessage: string;
  @Output() public onUploadFinished = new EventEmitter();

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

  showMessage() {
    console.log("Guilherme");
    this._success.next(`${new Date()} - Fotos Enviadas com Sucesso !`);
  }

  fileOverBase(event): void {
    this.hasBaseDropZoneOver = event;
  }

  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => fileItem.file);
  }

  async upload() {
    try {
      console.log("Foi")
      let files = this.getFiles();
      for (let file of files) {
        let formData = new FormData();
        formData.append('Image', file.rawFile, file.name);
        this.data.uploadImage(formData).subscribe(event => {
          if (event.type === HttpEventType.Response) {
            this.onUploadFinished.emit(event.body);
          }
        });
      }
      this.showMessage();
    } catch (error) {
      console.log(error);
    }
  }
}