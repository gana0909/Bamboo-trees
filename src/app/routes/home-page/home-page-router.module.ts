import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent, 
        children:[
            {
                path:'homePage',
                component: HomePageComponent,
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
export class HomePageRoutingModule { }
