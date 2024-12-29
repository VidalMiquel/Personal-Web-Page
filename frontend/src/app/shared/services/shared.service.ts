import { Injectable } from '@angular/core';
import { ContactElement } from '../interfaces/contact-element.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public contactComponent: ContactElement[] = [
    {
      redirectName: 'https://github.com/VidalMiquel',
      name: 'github',
      html:'fab fa-github'
    },
    {
      redirectName: 'https://www.linkedin.com/in/mvc4',
      name: 'linkedin',
      html:'fab fa-linkedin'
    },
    {
      redirectName: 'mailto:miquelvidalcortes@gmail.com',
      name: 'mail',
      html:'fas fa-envelope'
    },
    {
      redirectName: 'tel:+34 630232894',
      name: 'phone',
      html:'fas fa-phone'
    },
    {
      redirectName: 'assets/cvMiquelVidal.pdf',
      name: 'resume',
      html:'fas fa-file'
    }
  ];

  getContactComponent(): ContactElement[] {
    return this.contactComponent;
  }
}
