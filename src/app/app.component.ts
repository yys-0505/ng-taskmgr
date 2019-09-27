import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme = false;

  constructor(public oc: OverlayContainer) {

  }

  switchDarkTheme(dark) {
    this.darkTheme = dark;
    this.oc.getContainerElement().classList.add('myapp-dark-theme');
  }
}
