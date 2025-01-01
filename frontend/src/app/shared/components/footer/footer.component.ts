import { Component } from '@angular/core';
import { ContactElement } from '../../interfaces/contact-element.interface';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styles: [`
  .list-inline-item {
    margin: 1rem; /* Space between items */
    margin-top: 2rem;
  }

  .list-inline-item i {
    font-size: 1.5rem; /* Increase icon size */
    color: white;
  }

  .footer {
    background-color: #2c3e50;
    color: white; /* Text color for contrast */
    text-align: center;
    position: absolute; /* Position it at the bottom */
    bottom: 0; /* Align to the bottom of the page */
    width: 100%; /* Ensure the footer spans full width */
  }
  `]
})
export class FooterSharedComponent {

  contactElements: ContactElement[] = [];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.contactElements = this.sharedService.getContactComponent();
  }

}
