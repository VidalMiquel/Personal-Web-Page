import { Component } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styles: `
  .header{
      background-color: #2c3e50;
      padding-top: 1rem;
      padding-bottom: 1rem;
      color: white; 
  }

.nav-link:hover {
    color: #000000;
}
.custom-text-color{
  color: #ffffff;
}
  `
})
export class HeaderSharedComponent {
}
