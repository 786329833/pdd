import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/share/components/top-bar/top-bar.component';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './HomeContainer.component.html',
  styleUrls: ['./HomeContainer.component.css']
})
export class HomeContainerComponent implements OnInit {
  username = '';
  // 在service中得到数据
  tabs: TopMenu[] = [];

  constructor(private router: Router, private service: HomeService) { }

  ngOnInit() {
    this.tabs = this.service.getTabs();
  }



  handleSelection(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }


}
