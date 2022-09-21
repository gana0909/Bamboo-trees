import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { GardenTreesComponent } from './garden-trees.component';
import { GardenTreesRoutingModule } from './garden-trees.router.module'

@NgModule({
  declarations: [
    GardenTreesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    GardenTreesRoutingModule
  ],
  providers: []
})
export class GardenTreesModule { }
