import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    var tmpCounter = window.localStorage.getItem("counter")
    console.log(tmpCounter)
    if (tmpCounter !== null){
      this.counter = parseInt(tmpCounter);
    }
  }
  counter = 0;
  increaseCounter() {
    this.counter += 1;
    localStorage.setItem("counter", this.counter.toString())
  }
}
