import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/Image';


@Injectable({
    providedIn: 'root'
})

export class DataService {
    public url = 'https://localhost:44369'
    // public url = 'http://localhost/images/api/'


    constructor(private http: HttpClient) {
    }

    public uploadImage(formData: FormData): Observable<any> {
        return this.http.post(`${this.url}/api/uploadImage`, formData, { reportProgress: true, observe: 'events' });
    }

    public listImages() {
        return this.http.get<Image[]>(`${this.url}/api/listImages`);
    }

    public downloadImage(Id: string): Observable<Blob> {
        const headers = new HttpHeaders().set('content-type', 'multipart/form-data');
        return this.http.get(`${this.url}/api/downloadImage/` + Id, { headers, responseType: 'blob' });
    }
}