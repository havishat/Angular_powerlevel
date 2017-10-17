import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SuperSaiyanComponent } from './power/super-saiyan/super-saiyan.component';
import { SuperSaiyanthreeComponent } from './power/super-saiyanthree/super-saiyanthree.component';
import { SuperSaiyanfourComponent } from './power/super-saiyanfour/super-saiyanfour.component';
import { SuperSaiyantwoComponent } from './power/super-saiyantwo/super-saiyantwo.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanthreeComponent,
    SuperSaiyanfourComponent,
    SuperSaiyantwoComponent
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
