import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { MachineService} from './services/machine.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { StynoComponent } from './styno/styno.component';
import { MachineComponent } from './machine/machine.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Routes, RouterModule } from '@angular/router';
import { LukaDocComponent } from './luka-doc/luka-doc.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SystemeConceptionComponent } from './systeme-conception/systeme-conception.component';
import { PouquoiLukapayComponent } from './pouquoi-lukapay/pouquoi-lukapay.component';
import { ButComponent } from './but/but.component';
import { ChargeNavComponent } from './charge-nav/charge-nav.component';
import { CommencerComponent } from './commencer/commencer.component';
import { PcomponentComponent } from './pcomponent/pcomponent.component';
import { FaqComponent } from './faq/faq.component';

// const appRoutes : Routes = [
//   {path:"machines",canActivate:[AuthGuard], component:MachineViewComponent}
// ]
const appRoutes : Routes = [
  {path:"",component:AccueilComponent},
  {path : "accueil", component :AccueilComponent},
  {path : "doc", component: LukaDocComponent},
  {path : "introduction", component : IntroductionComponent},
  {path:"systeme-conception", component:SystemeConceptionComponent},
  {path: "pourquoi-lukapay", component:PouquoiLukapayComponent},
  {path: "but",component:ButComponent},
  {path: "pcharge",component:ChargeNavComponent},
  {path: "commencer",component:CommencerComponent},
  {path: "Pcomponent",component:PcomponentComponent},
  {path: "faq",component:FaqComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    StynoComponent,
    MachineComponent,
    AccueilComponent,
    LukaDocComponent,
    IntroductionComponent,
    SystemeConceptionComponent,
    PouquoiLukapayComponent,
    ButComponent,
    ChargeNavComponent,
    CommencerComponent,
    PcomponentComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MachineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
