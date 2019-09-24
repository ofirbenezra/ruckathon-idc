import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  rotation: number;
  @Input() show: boolean;
  @Output() rotateChange = new EventEmitter();

  countries = [
    {id: 1, name: 'United States'},
    {id: 2, name: 'Australia'},
    {id: 3, name: 'Canada'},
    {id: 4, name: 'Brazil'},
    {id: 5, name: 'England'}
  ];
  selectedValue = null;

  constructor(private spotBrokerService: SpotBrokerService) {
  }

  ngOnInit(): void {
    // if (this.show){
      this.spotBrokerService.getMacLocation().subscribe(res => {
        this.leftPossition = res.x + 'px';
        this.topPossition = res.y + 'px';
        this.rotation = res.rotation;
        this.rotateChange.emit(this.rotation);
      });
    // }

  }

}
