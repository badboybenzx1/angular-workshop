import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Workshop';

  description = 'iam from component.ts';

  result = '';

  onKeyup(event: any) {
    console.log(event);

    this.result = event.target.value;
  }

  onClickNewData(){
    this.result = 'Hi ~~~';
  }
}
