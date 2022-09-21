import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LuckyTreesComponent } from './lucky-trees.component';

const routes: Routes = [
    {
        path: '',
        component: LuckyTreesComponent, 
        children:[
            {
                path:'luckytrees',
                component: LuckyTreesComponent,
                data: {routeIndex: 1}
            }
            
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class LuckyTreesRoutingModule { }
