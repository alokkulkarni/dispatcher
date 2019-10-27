import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  name = ' ';
  number = ' ';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  setInfo() {
    this.name = ' ';
    this.number = ' ';
    this.router.navigate(['home']);
  }
}
