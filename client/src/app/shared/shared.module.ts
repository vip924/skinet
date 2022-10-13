import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';


@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot() // *** From ngx bootstrap package. ***
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent, // *** Exporting the header component to module using the shared module. ***
    PagerComponent
  ]
})
export class SharedModule { }
