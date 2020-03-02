import { Injectable } from '@angular/core';
import { TopMenu } from 'src/app/share/components/top-bar/top-bar.component';
import { ImageSlide } from 'src/app/share/components/image-slider/image-slider.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // TopMenu
  tabs: TopMenu[] = [
    {
      id: 1,
      title: '热门',
      link: 'hot'
    },
    {
      id: 2,
      title: '男装',
      link: 'man'
    },
    {
      id: 3,
      title: '百货',
      link: 'department'
    },
    {
      id: 4,
      title: '运动',
      link: 'sports'
    },
    {
      id: 5,
      title: '手机',
      link: 'mobile'
    },
    {
      id: 6,
      title: '家纺',
      link: 'textile'
    },
    {
      id: 7,
      title: '食品',
      link: 'food'
    },
    {
      id: 8,
      title: '电器',
      link: 'appliance'
    },
    {
      id: 9,
      title: '鞋包',
      link: 'shoes'
    },
    {
      id: 10,
      title: '汽车',
      link: 'cars'
    },
    {
      id: 11,
      title: '水果',
      link: 'fruits'
    },
    {
      id: 12,
      title: '内衣',
      link: 'underwaists'
    },
    {
      id: 13,
      title: '家装',
      link: 'decoration'
    },
    {
      id: 14,
      title: '母婴',
      link: 'baby'
    },
    {
      id: 15,
      title: '美妆',
      link: 'maquillage'
    },
    {
      id: 16,
      title: '家具',
      link: 'furniture'
    }
  ];
  // imageSlider



  // 返回 tabMenu
  getTabs() {
    return this.tabs;
  }
  // 返回 imageSlider
  getImageSlider() {
    console.log(this.http.get(`api/pdd/banners.php`));
    return this.http.get<ImageSlide[]>(`api/pdd/banners.php`);
  }

constructor(private http: HttpClient) {
}

}
