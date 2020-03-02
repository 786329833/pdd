import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './components/HomeContainer/HomeContainer.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { HomeGrandComponent } from './components/home-grand/home-grand.component';
import { HomeAuxComponent } from './components/home-aux/home-aux.component';
import { ParentComponent } from './components/parent/parent.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      // 默认，即不加后面的参数时应该导入到的页面
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      // 注意此处的path中有冒号，代表tabLink是一个变量
      {
        path: ':tabLink',
        component: HomeDetailComponent,
        children: [
          {
            path: 'aux',
            component: HomeAuxComponent,
            outlet: 'second'
          },
          {
            path: 'grand',
            component: HomeGrandComponent
          }
        ]
      }
    ]
  },
  {
    path: 'change-detection',
    pathMatch: 'full',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
