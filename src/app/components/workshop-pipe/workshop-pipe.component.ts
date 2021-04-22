import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-workshop-pipe',
  templateUrl: './workshop-pipe.component.html',
  styleUrls: ['./workshop-pipe.component.scss'],
})
export class WorkshopPipeComponent implements OnInit {
  users: User[] = [];

  constructor() {}

  ngOnInit(): void {
    this.users = [
      new User(1, 'johnny', 'depp', 'johnny.depp@gmail.com'),
      new User(2, 'leonardo', 'dicaprio', 'leonardo.dicaprio@gmail.com'),
      new User(3, 'tom', 'hank', 'tom.hank@gmail.com'),
    ];
  }
}
