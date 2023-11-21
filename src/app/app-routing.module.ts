import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmployeeComponent } from './employee/employee.component';
import { WorksComponent } from './works/works.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { ReviewGraphComponent } from './review-graph/review-graph.component';

const routes: Routes = [
  {
    path:'',component:MainComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'employee',component:EmployeeComponent
  },
  {
    path:'works',component:WorksComponent
  },
  {
    path:'review',component:ReviewGraphComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
