import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [    
    CommonModule,
    FormsModule,
    IonicModule,],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ComponentsModule {}
