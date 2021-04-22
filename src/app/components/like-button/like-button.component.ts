import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss'],
})
export class LikeButtonComponent implements OnInit {
  value: number = 100;

  @Input() liked?: boolean = false;

  @Output() buttonClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClicked() {
    this.buttonClicked.emit('like');
  }
}
