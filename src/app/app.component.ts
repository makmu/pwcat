import { Component } from '@angular/core';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  increaseCounter() {
    this.counter += 1;
  }
}
