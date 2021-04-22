import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  state: string = '';

  constructor() {}

  ngOnInit(): void {}

  onClicked($event: any) {
    this.state = this.state === $event ? '' : $event;
  }
}
