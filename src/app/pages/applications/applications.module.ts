import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationsPageRoutingModule } from './applications-routing.module';

import { ApplicationsPage } from './applications.page';
import { ComponentsModule } from 'src/app/components/toolbar/components.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FooterModule,
    ApplicationsPageRoutingModule
  ],
  declarations: [ApplicationsPage]
})
export class ApplicationsPageModule {}
