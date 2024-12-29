import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSharedComponent } from './components/header/header.component';
import { FooterSharedComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [HeaderSharedComponent, FooterSharedComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderSharedComponent,
    FooterSharedComponent
  ]
})
export class SharedModule { }
