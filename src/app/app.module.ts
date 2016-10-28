import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { HexGridComponent } from './hex-grid/hex-grid.component';
import { HexTileComponent } from './hex-tile/hex-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    GameScreenComponent,
    HexGridComponent,
    HexTileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
