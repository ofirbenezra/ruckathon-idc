import {Component, OnInit} from '@angular/core';
import {SpotBrokerService} from '../../app/spot-broker.service';

enum ClientDirectionEnum {
  left = 'icono-arrow1-left',
  right = 'icono-arrow1-right',
  up = 'icono-arrow1-up',
  down = 'icono-arrow1-down',
  leftUp = 'icono-arrow1-left-up',
  leftDown = 'icono-arrow1-left-down',
  rightUp = 'icono-arrow1-right-up',
  rightDown = 'icono-arrow1-right-down',

}

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientDirectionEnum = ClientDirectionEnum;
  clientDiretion: ClientDirectionEnum = ClientDirectionEnum.rightDown;
  topPossition: string;
  leftPossition: string;

  constructor(private spotBrokerService: SpotBrokerService) {
  }

  ngOnInit(): void {
    window.addEventListener('deviceorientation', this.handleOrientation, true);
    this.spotBrokerService.getMacLocation().subscribe(res => {
      this.leftPossition = res.x + 'px';
      this.topPossition = res.y + 'px';
    });
  }

  handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
  }

}
