import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

const isIOS = !(
  navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
  navigator.userAgent.match(/AppleWebKit/)
);

declare global {
  interface Window {
    FB:any;
  }
}

let FB = window.FB; // ok now

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public test;
  @HostListener('window:deviceorientation', ['$event']) onClick(event) {
    this.test = event.alpha;
  }
}



