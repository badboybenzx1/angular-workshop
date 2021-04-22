import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-workshop 02';

  result = '..';

  onKeyup(event: any){
    console.log(event);

    this.result = event.target.value;
  }
}
