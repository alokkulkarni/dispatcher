import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Address } from '../core/address';


@Injectable({ providedIn: 'root' })
export class AddressListService {
  private address: Subject<Address> = new Subject<Address>();

  constructor() {
    // this.address = new Subject<Address>();
  }

  public getAddress(): Observable<Address> {
    return this.address.asObservable();
  }

  public setAddress(newAddress: Address) {
    this.address.next(newAddress);
  }
}
