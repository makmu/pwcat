import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';

import * as webpush from 'web-push';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  readonly VAPID_PUBLIC_KEY = "BCgHKgP-c2RkVUOn8-mJPC0CcEVdAL7vHQ1OXPrDO-uhAYRlklMQlw6b8lhDggi57mMXGRqwOPxfkXcMLm56lCU";
  counter = 0;
  subscription = null;

  constructor( private swPush: SwPush) {
  }

  ngOnInit(): void {
    var tmpCounter = window.localStorage.getItem("counter")
    console.log(tmpCounter)
    if (tmpCounter !== null){
      this.counter = parseInt(tmpCounter);
    }
  }

  increaseCounter() {
    this.counter += 1;
    localStorage.setItem("counter", this.counter.toString())
  }

  subscribe() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => this.subscription = JSON.stringify(sub))
    .catch(error => console.error("Could not subscribe to notifications: ", error));
  }
}
