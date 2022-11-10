import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './components/component-1/component-one.component';
import { ComponentTwoComponent } from './components/component-2/component-two.component';
import { ComponentThreeComponent } from './components/component-3/component-three.component';
import { ComponentFourComponent } from './components/component-4/component-four.component';
import { ComponentFiveComponent } from './components/component-5/component-five.component';
import { ComponentSixComponent } from './components/component-6/component-six.component';
import { ComponentSevenComponent } from './components/component-7/component-seven.component';
import { ComponentNineComponent } from './components/component-9/component-nine.component';
import { ComponentTenComponent } from './components/component-10/component-ten.component';
import { ComponentEightComponent } from './components/component-8/component-eight.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent,
    ComponentFiveComponent,
    ComponentSixComponent,
    ComponentSevenComponent,
    ComponentNineComponent,
    ComponentTenComponent,
    ComponentEightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
