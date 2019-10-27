import { Component, OnInit, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AddressService } from './../core/address.service';
import { Address } from '../core/address';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.page.html',
  styleUrls: ['./address-list.page.scss']
})
export class AddressListPage implements OnInit {
  addresses: Promise<Address[]>;
  // navigationExtras: NavigationExtras = {
  //   state: {
  //     address: this.address
  //   }
  // };

  constructor(private router: Router, private addressService: AddressService, private events: Events) {}

  ngOnInit(): void {
    this.addressService.fetchAll().then(addresses => console.log(addresses));
    this.addresses = this.addressService.fetchAll();
  }

  sendMessage(address: Address) {
    this.events.publish('address', address);
  }
  // tslint:disable-next-line:align
  // tslint:disable-next-line:semicolon
  selectLocation(address: Address) {
    this.sendMessage(address);
    this.router.navigate(['home']);
  }
}
