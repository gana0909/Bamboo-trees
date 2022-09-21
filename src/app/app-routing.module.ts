import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    loadChildren: () => import('./routes/home-page/home-page.module').then(m => m.HomePageModule),
    data: { routeIndex: 1 }
  },
  {
    path: 'artificaltrees',
    loadChildren: () => import('./routes/artifical-trees/artifical-trees.module').then(m => m.ArtificalTreesModule),
    data: { routeIndex: 2 }
  },
  {
    path: 'gardentrees',
    loadChildren: () => import('./routes/garden-trees/garden-trees.module').then(m => m.GardenTreesModule),
    data: { routeIndex: 2 }
  },
  {
    path: 'luckytrees',
    loadChildren: () => import('./routes/lucky-trees/lucky-trees.module').then(m => m.LuckyTreesModule),
    data: { routeIndex: 2 }
  },
  {
    path: 'homePage',
    loadChildren: () => import('./routes/home-page/home-page.module').then(m => m.HomePageModule),
    data: { routeIndex: 2 }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
