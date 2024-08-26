import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { ApisService } from './service/apis.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComicsComponent } from './components/comics/comics.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    HeaderComponent,
    FooterComponent,
    CharactersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
