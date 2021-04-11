import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AndhrapradeshComponent } from './andhrapradesh/andhrapradesh.component';
import { TelanganaComponent } from './telangana/telangana.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { KeralaComponent } from './kerala/kerala.component';
import { TamilnaduComponent } from './tamilnadu/tamilnadu.component';
import { AndamanComponent } from './andaman/andaman.component';
import { LakshadweepComponent } from './lakshadweep/lakshadweep.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AndhrapradeshComponent,
    TelanganaComponent,
    KarnatakaComponent,
    KeralaComponent,
    TamilnaduComponent,
    AndamanComponent,
    LakshadweepComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
