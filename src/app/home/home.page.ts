import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Events, Platform } from '@ionic/angular';
import { Address } from '../core/address';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  data: any;
  address: Address;
  // tslint:disable-next-line:no-inferrable-types
  located: boolean = false;
  height = 0;
  // tslint:disable-next-line:no-inferrable-types
  lat: number = 51.678418;
  // tslint:disable-next-line:no-inferrable-types
  lng: number = 7.809007;
  constructor(
    private platform: Platform,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private events: Events
  ) {
    console.log(' in home page constructor');
    this.height = platform.height() - 56;
  }

  gotoSetup() {
    this.router.navigate(['setup']);
  }

  gotoAddressList() {
    // tslint:disable-next-line:variable-name
    this.events.subscribe('address', _param => {
      // listen to event subscription
      this.address = _param;
      if (this.address) {
        this.located = true;
      }
      console.log(this.address);
      this.events.unsubscribe('address'); // unsubscribe this event
    });
    this.router.navigate(['address-list']);
  }

  receiveEvent() {
    // tslint:disable-next-line:variable-name
  }

  getLatitude(): number {
    return this.located ? Number(this.address.latitude) : this.lat;
  }

  getLongitude(): number {
    return this.located ? Number(this.address.longitude) : this.lng;
  }
}
