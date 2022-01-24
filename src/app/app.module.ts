import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { myContainerComponent } from './myContainer/myContainerComponent';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { Txtsec1Component } from './myContainer/txtsec1/txtsec1.component';
import { Txtsec2Component } from './myContainer/txtsec2/txtsec2.component';
import { DatabindComponent } from './databind/databind.component';
import { PropertybindComponent } from './propertybind/propertybind.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventbindComponent } from './eventbind/eventbind.component';

@NgModule({
  declarations: [
    AppComponent,
    myContainerComponent,
    Txtsec1Component,
    Txtsec2Component,
    HeaderComponent,
    TopnavComponent,
    DatabindComponent,
    PropertybindComponent,
    ClassStyleComponent,
    EventbindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
