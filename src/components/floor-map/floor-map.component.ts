import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SpotBrokerService} from '../../app/spot-broker.service';

declare var screen: Screen;

@Component({
  selector: 'floor-map',
  templateUrl: './floor-map.component.html',
  styleUrls: ['./floor-map.component.scss']
})
export class FloorMapComponent implements AfterViewInit {

  clientPosition: {x: 200, y: 50};
  mapSize = {width: 0, height: 0};
  deg = 0;
  navigate = false;
  @ViewChild('map', {static: false}) map: ElementRef;
  @ViewChild('path', {static: false}) path: ElementRef;

  constructor(private spotBrokerService: SpotBrokerService) {
    this.spotBrokerService.initIndex().subscribe(x => {
    });
  }

  ngAfterViewInit() {
    this.rotate(this.deg);
  }

  onMapLoaded({currentTarget}) {
    this.mapSize.height = currentTarget.clientHeight;
    this.mapSize.width = currentTarget.clientWidth;
  }

  onHeadingChange(event) {
    const heading = event.alpha;
    alert(heading);
  }

  rotate(rotateVal) {
    this.deg = rotateVal;
    this.map.nativeElement.style.webkitTransform = 'rotate(' + this.deg + 'deg)';
    this.map.nativeElement.style.mozTransform    = 'rotate(' + this.deg + 'deg)';
    this.map.nativeElement.style.msTransform     = 'rotate(' + this.deg + 'deg)';
    this.map.nativeElement.style.oTransform      = 'rotate(' + this.deg + 'deg)';
    this.map.nativeElement.style.transform       = 'rotate(' + this.deg + 'deg)';

    this.path.nativeElement.style.webkitTransform = 'rotate(' + this.deg + 'deg)';
    this.path.nativeElement.style.mozTransform    = 'rotate(' + this.deg + 'deg)';
    this.path.nativeElement.style.msTransform     = 'rotate(' + this.deg + 'deg)';
    this.path.nativeElement.style.oTransform      = 'rotate(' + this.deg + 'deg)';
    this.path.nativeElement.style.transform       = 'rotate(' + this.deg + 'deg)';
  }

  rotatRight() {
    this.deg += 90;
    this.map.nativeElement.style.webkitTransform = 'rotate(' + this.deg + 'deg)';
    this.map.nativeElement.style.mozTransform    = 'rotate(' + this.deg + 'deg)';
    this.map.nativeElement.style.msTransform     = 'rotate(' + this.deg + 'deg)';
    this.map.nativeElement.style.oTransform      = 'rotate(' + this.deg + 'deg)';
    this.map.nativeElement.style.transform       = 'rotate(' + this.deg + 'deg)';
  }

  onRotationChange(rotation) {
    this.rotate(rotation);
  }

  onClick() {
    setTimeout((x) => {
      this.navigate = true;
    },2000);
  }
}
