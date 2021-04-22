import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-workshop-rating',
  templateUrl: './workshop-rating.component.html',
  styleUrls: ['./workshop-rating.component.scss'],
})
export class WorkshopRatingComponent implements OnInit {
  users: User[] = [];

  constructor() {}

  ngOnInit(): void {
    this.users = [
      new User(1, 'johnny', 'depp', 'johnny.depp@gmail.com', 4),
      new User(2, 'leonardo', 'dicaprio', 'leonardo.dicaprio@gmail.com', 3),
      new User(3, 'tom', 'hank', 'tom.hank@gmail.com', 5),
    ];
  }
}
