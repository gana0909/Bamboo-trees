import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
// import {MatToolbarModule} from '@angular/material/toolbar'; 
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';


@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        AboutComponent
  ],
  imports: [
    // MatToolbarModule,
    CommonModule
    // MatSelectModule,
    // MatFormFieldModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    AboutComponent
  ],

  providers: []
})
export class SharedModule { }
