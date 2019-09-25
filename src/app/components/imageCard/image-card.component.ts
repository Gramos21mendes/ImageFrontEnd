import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/Image';

@Component({
    selector: 'app-image-card',
    templateUrl: './image-card.component.html'
})
export class ImageCardComponent implements OnInit {
    @Input() image: Image;
    constructor(){

    }

    ngOnInit(){
        
    }
}