import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main/main.component';
import { ResumePageComponent } from './pages/resume/resume.component';
import { ProjectsPageComponent } from './pages/projects/projects.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';



@NgModule({
  declarations: [
    MainPageComponent,
    ResumePageComponent,
    ProjectsPageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  exports:[
  ]
})
export class PortfolioModule { }
