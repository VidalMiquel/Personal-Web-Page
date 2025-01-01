import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styles: [
        `
    .bg-light {
        height: 100vh; /* Full viewport height */
        max-height: 762px; /* Maximum height (adjust as needed) */
        display: flex;
        flex-direction: column;
        justify-content: center; /* Vertically center content */
        align-items: center; /* Horizontally center content */
        text-align: center; /* Ensure text inside is centered */
    }

    .title{
        color: #2c3e50;
    }

    .btn {
    background-color: #2c3e50;
    color: white;
    transition: color 0.3s ease; /* Smooth transition for text color change */
    }

    `,
    ],

})
export class MainPageComponent {

}
