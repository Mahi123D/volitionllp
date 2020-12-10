import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    NgxPaginationModule
  ]
})
export class DemoModule { }
