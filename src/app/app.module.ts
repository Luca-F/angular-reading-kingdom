import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BanComponent } from './ban/ban.component';
import { ProposComponent } from './propos/propos.component';
import { LecturechapitreComponent  } from './lecturechapitre/lecturechapitre.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BanComponent, ProposComponent, LecturechapitreComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
