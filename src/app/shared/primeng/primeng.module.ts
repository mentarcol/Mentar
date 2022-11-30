import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GalleriaModule,
    SidebarModule,
    ToastModule
  ],
  exports: [GalleriaModule, ButtonModule, SidebarModule, ToastModule]
})
export class PrimengModule { }
