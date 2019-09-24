import {Component} from '@angular/core';

declare var screen: Screen;

@Component({
  selector: 'floor-map',
  templateUrl: './floor-map.component.html',
  styleUrls: ['./floor-map.component.scss']
})
export class FloorMapComponent {

  clientPosition: {x: 200, y: 50};
  mapSize = {width: 0, height: 0};


  constructor() {
  }

  onMapLoaded({currentTarget}) {
    this.mapSize.height = currentTarget.clientHeight;
    this.mapSize.width = currentTarget.clientWidth;
  }
}
