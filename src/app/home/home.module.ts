import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share/share.module';
import { HomeContainerComponent } from './components/HomeContainer/HomeContainer.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { HomeGrandComponent } from './components/home-grand/home-grand.component';
import { HomeAuxComponent } from './components/home-aux/home-aux.component';
import { HomeService } from './services/home.service';
import { ParentComponent } from './components/parent/parent.component';


@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent, ParentComponent],
  imports: [
    ShareModule,
    HomeRoutingModule
  ],
  providers: [HomeService],
  exports: [
    HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent, ParentComponent
  ]
})
export class HomeModule { }
