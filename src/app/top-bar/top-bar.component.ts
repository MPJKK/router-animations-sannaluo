import { Component, OnInit } from '@angular/core';
import { routerTransition} from '../animations/router.animations';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  animations: [ routerTransition ]
})
export class TopBarComponent implements OnInit {

  constructor() { }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  ngOnInit() {
  }

}
