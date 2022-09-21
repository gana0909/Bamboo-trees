import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { LuckyTreesComponent } from './lucky-trees.component';
import { LuckyTreesRoutingModule } from './lucky-trees.router.module'

@NgModule({
  declarations: [
    LuckyTreesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    LuckyTreesRoutingModule
  ],
  providers: []
})
export class LuckyTreesModule { }
