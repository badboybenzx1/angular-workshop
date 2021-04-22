import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dislike-button',
  templateUrl: './dislike-button.component.html',
  styleUrls: ['./dislike-button.component.scss'],
})
export class DislikeButtonComponent implements OnInit {
  value: number = 25;

  @Input() disliked?: boolean = false;

  @Output() buttonClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClicked() {
    this.buttonClicked.emit('dislike');
  }
}
