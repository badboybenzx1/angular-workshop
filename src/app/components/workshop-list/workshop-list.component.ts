import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.scss'],
})
export class WorkshopListComponent implements OnInit {
  tasks: string[] = ['First task', 'Second task', 'Third task'];

  constructor() {}

  ngOnInit(): void {}
}
