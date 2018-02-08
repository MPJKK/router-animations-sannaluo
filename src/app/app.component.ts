import { Component } from '@angular/core';
import { routerTransition} from './animations/router.animations';
import {fadeAnimation} from './animations/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeAnimation ] // routerTransition
})
export class AppComponent {
  title = 'app';
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
