import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main/main.component';
import { ResumePageComponent } from './pages/resume/resume.component';
import { ProjectsPageComponent } from './pages/projects/projects.component';
import { ContactPageComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path:"home", component: MainPageComponent
  },
  {
    path:"resume", component: ResumePageComponent
  },{
    path:"projects", component: ProjectsPageComponent
  },
  {
    path:"contact", component: ContactPageComponent
  },
  {
    path:"**", redirectTo: "home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
