import {Component} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular2 App</h1>
        <button (click)="gotoDetails()">Start Loading</button>
        <ng2-slim-loading-bar></ng2-slim-loading-bar>
    `
})

export class AppComponent {

    constructor(private slimLoadingBarService: SlimLoadingBarService) { }

    gotoDetails() {
        this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
    }
}