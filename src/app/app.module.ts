import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { MainComponent } from './pages/main/main.component';
import { ControlComponent } from './pages/control/control.component';
import { TimerComponent } from './components/timer/timer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { environment } from '../environments/environment';
import { InitComponent } from './components/init/init.component';
import { FadeInDownDirective } from './directives/fade-in-down.directive';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ScoreboardComponent,
    MainComponent,
    ControlComponent,
    TimerComponent,
    MenuComponent,
    InitComponent,
    FadeInDownDirective
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule, MatCardModule, MatInputModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
