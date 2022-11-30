import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentOneComponent } from './components/menu/menu.component';
import { ComponentTwoComponent } from './components/landing-section/landing-section.component';
import { ComponentThreeComponent } from './components/steps-section/steps-section.component';
import { ComponentFourComponent } from './components/results-section/results-section.component';
import { LifeLineComponent } from './components/life-line-section/life-line-section.component';
import { ComponentSixComponent } from './components/brand-path-section/brand-path-section.component';
import { ComponentSevenComponent } from './components/phase-section/phase-section.component';
import { ComponentFreeAdvice } from './components/free-advice-section/free-advice-section.component';
import { ComponentTenComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { MaterialModule } from './shared/material/material.module';
import { PrimengModule } from './shared/primeng/primeng.module';
import { CourselComponent } from './components/coursel/coursel.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalPhaseComponent } from './components/modal-phase/modal-phase.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent,
    LifeLineComponent,
    ComponentSixComponent,
    ComponentSevenComponent,
    ComponentFreeAdvice,
    ComponentTenComponent,
    FormComponent,
    CourselComponent,
    AccordionComponent,
    SidebarComponent,
    ModalPhaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
