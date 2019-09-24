import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class DataService {
    public url = 'https://localhost:44369'


    constructor(private http: HttpClient) {
    }

    public uploadPhoto(formData: FormData): Observable<any> {
        return this.http.post(`${this.url}/api/upload`, formData, { reportProgress: true, observe: 'events' });
    }

}