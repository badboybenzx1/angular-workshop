import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() rating?: number = 0;

  @Output() ratingClicked = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onClickRate(index: number): void {
    this.ratingClicked.emit(index);
  }
}
