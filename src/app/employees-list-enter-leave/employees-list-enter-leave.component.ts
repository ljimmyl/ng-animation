import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-employees-list-enter-leave',
  templateUrl: './employees-list-enter-leave.component.html',
  styleUrls: ['./employees-list-enter-leave.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class EmployeesListEnterLeaveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
