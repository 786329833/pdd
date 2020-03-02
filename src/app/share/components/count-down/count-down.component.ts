import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';
@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  countDown$: Observable<string>;
  @Input() startDate = new Date();
  @Input() futureDate: Date;
  private _MS_PER_SECOND = 1000;
  constructor() { }

  ngOnInit() {
    // interval可理解为计时器
    // 此处整理到notion中
    // elapse是一个每秒+1的 代表着时间流逝的计数器1..2..3..4..
    // takeWhile为过滤器 到达条件后停止，filter没有停止流的功能
    // 理解pipe 每一行的输出都是下一行的输入
    this.countDown$ = interval(1000).pipe(
      map(elapse => this.diffInSec(this.startDate, this.futureDate) - elapse),
      takeWhile(gap => gap >= 0),
      // 新的操作符tap
      tap(val => {console.log(val); }),
      map(diffSeconds => ({
        // diffSeconds / 3600 是计算差值有多少个小时
        day: Math.floor(diffSeconds / 3600 / 24),
        hour: Math.floor((diffSeconds / 3600) % 24),
        minute: Math.floor((diffSeconds / 60) % 60),
        seconds: Math.floor(diffSeconds % 60)
      })),
      // 用括号括起 表示 返回一个对象 用date表示这个对象
      map(date => `${date.day}天 ${date.hour}:${date.minute}:${date.seconds}`)
      // es6写法 map(({hour, minute}) => hour)
      );
  }
  private diffInSec = (start: Date, future: Date): number => {
    const diff = future.getTime() - start.getTime(); // 得到相差的毫秒数
    return Math.floor(diff / this._MS_PER_SECOND);
  }

}
