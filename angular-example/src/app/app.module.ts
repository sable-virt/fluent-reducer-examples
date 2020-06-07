import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootStateService } from '../reducers/app.reducer.service'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RootStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
