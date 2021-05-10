import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoFrameModule } from './shared/components/photo-frame/photo-frame.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoFrameModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
