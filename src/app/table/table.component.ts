import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator:any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Marriage', weight: 'Kazhimbram', symbol: '29-8-2022'},
  {position: 2, name: 'Birthday', weight: 'Thrissur', symbol: '1-9-2023'},
  {position: 3, name: 'Marriage', weight: 'Kochi', symbol: '3-9-2023'},
  {position: 4, name: 'Marriage', weight: 'Mannuthy', symbol: '4-9-2023'},
  {position: 5, name: 'Haldi', weight: 'Palakkad', symbol: '6-9-2023'},
  {position: 6, name: 'Birthday', weight: 'Kannur', symbol: '7-9-2023'},
  {position: 7, name: 'Marriage', weight: 'Irigalakkuda', symbol: '8-9-2023'},
  {position: 8, name: 'Inauguration', weight: 'Angamali', symbol: '11-9-2023'},
  {position: 9, name: 'Marriage', weight: 'Vadakkanchery', symbol: '15-9-2023'},
  {position: 10, name: 'Inauguration', weight: 'Chavakkad', symbol: '16-9-2023'},
  {position: 11, name: 'Birthday', weight: 'Kunnamkullam', symbol: '19-9-2023'},
  {position: 12, name: 'Birthday', weight: 'Vyttila', symbol: '20-9-2023'},
  {position: 13, name: 'Marriage', weight: 'Kakkanad', symbol: '21-9-2023'},
  {position: 14, name: 'Haldi', weight: 'Guruvayoor', symbol: '22-9-2023'},
  {position: 15, name: 'Marriage', weight: 'Nattika', symbol: '25-9-2023'},
  {position: 16, name: 'Marriage', weight: 'Puthukkad', symbol: '26-9-2023'},
  {position: 17, name: 'Birthday', weight: 'Vadanapulli', symbol: '27-9-2023'},
  {position: 18, name: 'Marriage', weight: 'Cherthala', symbol: '1-10-2023'},
  {position: 19, name: 'Inauguration', weight: 'Kodugalur', symbol: '3-10-2023'},
  {position: 20, name: 'Birthday', weight:'Chandhrapini', symbol: '4-10-2023'},
];

