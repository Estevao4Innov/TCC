import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationsPageRoutingModule } from './informations-routing.module';

import { InformationsPage } from './informations.page';
import { ComponentsModule } from 'src/app/components/toolbar/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    InformationsPageRoutingModule
  ],
  declarations: [InformationsPage]
})
export class InformationsPageModule {}
