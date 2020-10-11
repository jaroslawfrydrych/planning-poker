import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { SharedModule } from '@shared/shared.module';
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
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
