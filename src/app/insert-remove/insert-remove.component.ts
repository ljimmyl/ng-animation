import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-insert-remove',
  templateUrl: './insert-remove.component.html',
  styleUrls: ['./insert-remove.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class InsertRemoveComponent implements OnInit {
  isShown = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.isShown = !this.isShown;
  }

}
