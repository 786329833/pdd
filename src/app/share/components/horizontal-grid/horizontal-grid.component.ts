import { Component, OnInit, Input, Output, ElementRef, Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { addInfo, Confirmable } from '../../decorators';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})

export class HorizontalGridComponent implements OnInit {
  @Output() usernameChange = new EventEmitter();
  @Input()
  // 一行几列
  @Input() cols = 8;
  // 主页中显示几列
  @Input() displayCols = 5;
  sliderMargin = '0';

  channels: Channel[] = [
    {
      id: 1,
      icon: '../../../assets/icon-1/包包.png',
      title: '包包',
      link: 'home',
    },
    {
      id: 2,
      icon: '../../../assets/icon-1/衬衫.png',
      title: '衬衫',
      link: 'home',
    },
    {
      id: 3,
      icon: '../../../assets/icon-1/大衣.png',
      title: '大衣',
      link: 'home',
    },
    {
      id: 4,
      icon: '../../../assets/icon-1/吊带.png',
      title: '吊带',
      link: 'home',
    },
    {
      id: 5,
      icon: '../../../assets/icon-1/短裤.png',
      title: '短裤',
      link: 'home',
    },
    {
      id: 6,
      icon: '../../../assets/icon-1/毛衣.png',
      title: '毛衣',
      link: 'home',
    },
    {
      id: 7,
      icon: '../../../assets/icon-1/帽子.png',
      title: '帽子',
      link: 'home',
    },
    {
      id: 8,
      icon: '../../../assets/icon-1/内衣.png',
      title: '内衣',
      link: 'home',
    },
    {
      id: 9,
      icon: '../../../assets/icon-1/牛仔裤.png',
      title: '牛仔裤',
      link: 'home',
    },
    {
      id: 10,
      icon: '../../../assets/icon-1/配饰.png',
      title: '配饰',
      link: 'home',
    },
    {
      id: 11,
      icon: '../../../assets/icon-1/袜子.png',
      title: '袜子',
      link: 'home',
    },
    {
      id: 12,
      icon: '../../../assets/icon-1/外套.png',
      title: '外套',
      link: 'home',
    },
    {
      id: 13,
      icon: '../../../assets/icon-1/围巾.png',
      title: '围巾',
      link: 'home',
    },
    {
      id: 14,
      icon: '../../../assets/icon-1/卫衣.png',
      title: '卫衣',
      link: 'home',
    },
    {
      id: 15,
      icon: '../../../assets/icon-1/鞋子.png',
      title: '鞋子',
      link: 'home',
    },
    {
      id: 16,
      icon: '../../../assets/icon-1/休闲裤.png',
      title: '休闲裤',
      link: 'home',
    },
    {
      id: 17,
      icon: '../../../assets/icon-1/羽绒服.png',
      title: '羽绒服',
      link: 'home',
    },
    {
      id: 18,
      icon: '../../../assets/icon-1/长裙.png',
      title: '长裙',
      link: 'home',
    },
    {
      id: 19,
      icon: '../../../assets/icon-1/T恤.png',
      title: 'T恤',
      link: 'home',
    },
    {
      id: 20,
      icon: '../../../assets/icon-1/短裙.png',
      title: 'T恤',
      link: 'home',
    }

  ];

    // username = '';
    // tslint:disable-next-line: variable-name
    // private _username = '';
    constructor() {
    }


  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }
  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }
  // 一列宽度 = (视窗宽度 - 可视列数的间隔) / 可视列数
  // templateColumns是重复 一列宽度
  public get templateColumns(): string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols * 0.4}rem) / ${this.displayCols}))`;
  }

  handleScroll(ev) {
    // 滚动条相对于左侧的长度 / 滚动条的宽度 的百分比
    this.sliderMargin = `0 ${100 * ev.target.scrollLeft / ev.target.scrollWidth}&`;
  }

  ngOnInit() {
  }

}
