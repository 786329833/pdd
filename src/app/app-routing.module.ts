import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdDirective } from './ad.directive';
import { HomeContainerComponent } from './home/components/HomeContainer/HomeContainer.component';


const routes: Routes = [
   // { path: '', redirectTo}
   { path: '', component: HomeContainerComponent }

];

// 根模块用forRoot 其他的用forChild
@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      AdDirective
   ]
})
export class AppRoutingModule { }
