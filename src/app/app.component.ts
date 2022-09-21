import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bamboo-Tree';
  constructor(private route: ActivatedRoute ,) {}

  animationState: any;

  onActivate($event:any) {

  }
}
