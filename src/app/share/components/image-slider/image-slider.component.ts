import { Component, OnInit,
  Input, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, Renderer2, OnDestroy, OnChanges } from '@angular/core';
// import { setInterval, clearInterval } from 'timers';

export interface ImageSlide {
  id: number;
  imageUrl: string;
  link: string;
  caption: string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @Input() sliders: ImageSlide[] = [];
  @Input() scrollHeight = '160px';

  // 轮播图当前id
  selectedIndex = 0;

  // 对setInterval进行id标记
  intevalId;

  // 定义轮播图时间间隔
  @Input() intervalBySeconds = 2;

  // 轮播图的div
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  // 动态 false 静态 true
  @ViewChildren('img') imgs: QueryList<ElementRef>;
  constructor(private rd2: Renderer2) { }
  // 依赖注入
  ngOnInit() {
    console.log(this.imgSlider.nativeElement.scrollWidth);
  }

  // 此处发现天坑 ngAfterViewInit的scrollWidth和外面函数的不一样

  ngAfterViewInit(): void {
  }

  ngOnChanges(): void {
    length = this.sliders.length;
    const screenWidth = this.imgSlider.nativeElement.scrollWidth;
    // console.log('screenWidth is 1 ' + this.imgSlider.nativeElement.scrollWidth);
    // console.log('screenWidth is 2 ' + this.imgSlider.nativeElement.scrollWidth);
    this.intevalId = setInterval(() => {
      // console.log('screenWidth is 3 ' + this.imgSlider.nativeElement.scrollWidth);
      this.selectedIndex = (this.selectedIndex + 1) % length;
      // console.log(this.selectedIndex);
      // console.log('screenWidth is xxx' + this.imgSlider.nativeElement.scrollWidth);
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft', this.selectedIndex * screenWidth);
    }, this.intervalBySeconds * 1000);
  }




  handleScroll(event) {
    const screenWidth = this.imgSlider.nativeElement.scrollWidth;
    const ratio = event.target.scrollLeft * this.sliders.length / screenWidth;
    // 三张图片打印的值分别为 0.00 --- 0.99  1.00 --- 1.99 2.00 ---2.99 四舍五入对selectedIndex赋值
    this.selectedIndex = Math.round(ratio);
    // console.log('selectedIndex is ' + this.selectedIndex + ' ratio is ' + ratio);
  }

  ngOnDestroy(): void {
    clearInterval(this.intevalId);
  }

}
