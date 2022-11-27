import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GalleriaModule,
    SidebarModule
  ],
  exports: [GalleriaModule, ButtonModule, SidebarModule]
})
export class PrimengModule { }
