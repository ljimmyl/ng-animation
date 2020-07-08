import { Component, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-status-slider',
  templateUrl: './status-slider.component.html',
  styleUrls: ['./status-slider.component.css'],
  animations: [
    trigger('isActiveInactive', [
      transition('* => active', [
        animate('2s', keyframes([
          style({ backgroundColor: 'blue', offset: 0}),
          style({ backgroundColor: 'red', offset: 0.8}),
          style({ backgroundColor: 'orange', offset: 1.0})
        ])),
      ]),
      transition('* => inactive', [
        animate('2s', keyframes([
          style({ backgroundColor: 'orange', offset: 0}),
          style({ backgroundColor: 'red', offset: 0.2}),
          style({ backgroundColor: 'blue', offset: 1.0})
        ]))
      ]),
    ])
  ]
})
export class StatusSliderComponent implements OnInit {
  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isActive = !this.isActive;
  }

}
