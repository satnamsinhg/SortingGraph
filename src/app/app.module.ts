import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdMaterialcomponentsModule } from './md-materialcomponents/md-materialcomponents.module';
import { QuicksortAlgoComponent } from './Sorting-algo/quicksort-algo.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, QuicksortAlgoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdMaterialcomponentsModule,
    ChartsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
