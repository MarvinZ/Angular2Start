import { Component, OnInit } from '@angular/core';
import { IThing } from './../models/thing';
import { ThingService } from './../services/thing.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
    pageTitle: string = 'Thing List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    things: IThing[];

  constructor(private _thingService: ThingService) { }

 toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._thingService.getThings()
                .subscribe(things => this.things = things,
                           error => this.errorMessage = <any>error);
    }

    // onRatingClicked(message: string): void {
    //     this.pageTitle = 'Thing List: ' + message;
    // }

}
