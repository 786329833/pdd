import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {

  constructor() { }

  obj = {
    productId: 2,
    productName: 'xxPhone',
    model: 's',
    type: '全面屏'
  };
  date: Date;
  price: number;
  data: [1, 22, 3, 3, 3, 32, 3, 4];
  ngOnInit() {
    this.date = this.minusDays(new Date(), 3);
    this.price = 123.322313;
  }

  // 日期和要减去的天数
  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }


}
