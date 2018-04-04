import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DomainComponent } from './components/levels/domain/domain.component';
import { BasicService } from '../app/services/basic.service';

@NgModule({
  declarations: [
    AppComponent,
    DomainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BasicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
