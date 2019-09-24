import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data-service';
import { HttpEventType } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-image-upload-page',
  templateUrl: './image-upload-page.component.html',
  styleUrls: ['./image-upload-page.component.css']
})
export class ImageUploadPageComponent implements OnInit {
  public form: FormGroup
  public photoFile: any
  public progress: number = 0
  public message: string
  public imageUrl = "/assets/img/defaultImage.png"
  private _success = new Subject<string>();
  fileToUpload: File = null

  staticAlertClosed = false;
  successMessage: string;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private data: DataService
  ) {
    this.form = this.fb.group({
      archiveName: ['', Validators.compose([
        Validators.minLength(3),
        Validators.max(120),
        Validators.required
      ])],
      archive: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  submit(archiveData) {
    console.log("Dados", archiveData);
    const formData = new FormData();
    formData.append('Image', this.fileToUpload, archiveData.archiveName);
    formData.append('ImageCaption', archiveData.archiveName);
    this.data.uploadPhoto(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.show();
        this.message = 'Upload feito com sucesso !';
        this.onUploadFinished.emit(event.body);
      }
    });
  }

  show() {
    console.log("Guilherme");
    this._success.next(`${new Date()} - Foto Enviada com Sucesso !`);
  }

  handleFileInput(files: FileList) {
    // console.log("files", files)
    this.fileToUpload = files.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

}
