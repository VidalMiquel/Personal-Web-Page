import { Component } from '@angular/core';
import { ContactElement } from '../../interfaces/contact-element.interface';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styles: [`
    .list-inline-item {
      margin: 1rem; /* Space between items */
    }

    .list-inline-item i {
      font-size: 1.5rem; /* Increase icon size */
    }

    .footer {
    padding-top: 1rem;
    background-color: #2c3e50;
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
