import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BanComponent } from './ban/ban.component';
import { ProposComponent } from './propos/propos.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BanComponent, ProposComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
