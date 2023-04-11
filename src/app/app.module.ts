import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRountingModule } from './app-rounting.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,


    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRountingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),

    ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
