import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtificalTreesComponent } from './artifical-trees.component';

const routes: Routes = [
    {
        path: '',
        component: ArtificalTreesComponent, 
        children:[
            {
                path:'artificaltrees',
                component: ArtificalTreesComponent,
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
export class ArtificaltressRoutingModule { }
