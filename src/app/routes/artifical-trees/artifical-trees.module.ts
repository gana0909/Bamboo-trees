import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArtificalTreesComponent } from './artifical-trees.component';
import { ArtificaltressRoutingModule } from './artifical-trees.router.module'

@NgModule({
  declarations: [
    ArtificalTreesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ArtificaltressRoutingModule
  ],
  providers: []
})
export class ArtificalTreesModule { }
