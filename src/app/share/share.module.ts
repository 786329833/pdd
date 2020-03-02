import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
import { GridItemDirective } from './directives/grid-item.directive';
import { GridItemImageDirective } from './directives/grid-item-image.directive';
import { GridItemTitleDirective } from './directives/grid-item-title.directive';
import { AgoPipe } from './pipes/ago.pipe';
import { CountDownComponent } from './components/count-down/count-down.component';



@NgModule({
  declarations: [
    TopBarComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    CountDownComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TopBarComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    CountDownComponent
  ]
})
export class ShareModule { }
