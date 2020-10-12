import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { SharedModule } from '@shared/shared.module';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { PokerModule } from "./poker/poker.module";

const config: SocketIoConfig = {url: '/', options: {}};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    PokerModule,
    RouterModule,
    SocketIoModule.forRoot(config),
    NgxGoogleAnalyticsModule.forRoot('UA-180323084-1')
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
