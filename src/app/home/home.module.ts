import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCAnIcmJBGSQ25TSpJ3v_-4d4XW_dKnRR0'
    }),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
