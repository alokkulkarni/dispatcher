import { Injectable } from '@angular/core';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  addresses: Address[] = [];
  constructor() {
    this.addresses.push(
      new Address(
        1,
        'Library',
        '100 main st',
        '',
        'Álton',
        'NH',
        '03809',
        'home',
        '',
        '40.429761',
        '-111.8952174'
      )
    );
    this.addresses.push(
      new Address(
        2,
        'Hanaford',
        '80 Woleboro Hwy',
        '',
        'Álton',
        'NH',
        '03809',
        'home',
        '',
        '40.429761',
        '-111.8952174'
      )
    );
    this.addresses.push(
      new Address(
        3,
        'McDonald',
        '4 Homestead Pl',
        '',
        'Álton',
        'NH',
        '03809',
        'home',
        '',
        '40.429761',
        '-111.8952174'
      )
    );
  }



  fetchAll(): Promise<Address[]> {
    const p = Promise.resolve<Address[]>(this.addresses);
    return p;
  }
}
