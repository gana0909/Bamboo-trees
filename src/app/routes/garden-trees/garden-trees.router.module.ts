import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardenTreesComponent } from './garden-trees.component';

const routes: Routes = [
    {
        path: '',
        component: GardenTreesComponent, 
        children:[
            {
                path:'gardentreestrees',
                component: GardenTreesComponent,
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
export class GardenTreesRoutingModule { }
