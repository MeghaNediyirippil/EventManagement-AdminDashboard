import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatDividerModule} from '@angular/material/divider';
import { GalleryComponent } from './gallery/gallery.component';
import { EmployeeComponent } from './employee/employee.component';
import { WorksComponent } from './works/works.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { ReviewGraphComponent } from './review-graph/review-graph.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PieChartComponent } from './pie-chart/pie-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SideBarComponent,
    GalleryComponent,
    EmployeeComponent,
    WorksComponent,
    AreaChartComponent,
    TableComponent,
    ReviewGraphComponent,
    PieChartComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    HighchartsChartModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
