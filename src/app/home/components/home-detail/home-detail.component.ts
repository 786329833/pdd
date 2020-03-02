import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ImageSlide } from 'src/app/share/components/image-slider/image-slider.component';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  // 如果是一个类(服务)的话，直接用这个类就好，但如果不是一个类时
  constructor(private route: ActivatedRoute, private service: HomeService, private cd: ChangeDetectorRef) { }
  username = '';
  selectedTablink;
  imageSliders: ImageSlide[] = [];
  dd = 1;

  ngOnInit() {
    this.service.getImageSlider().subscribe(sliders => {
      console.log(sliders);
      this.imageSliders = sliders;
      this.cd.markForCheck();
    });

    this.route.paramMap.subscribe(params => {
      console.log('路径参数', params);
      this.selectedTablink = params.get('tabLink');
    });

    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
  }

}
