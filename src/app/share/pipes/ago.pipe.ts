import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appAgo'
})
export class AgoPipe implements PipeTransform {

  // 此处的value指的是应用于管道的值
  transform(value: any, args?: any): any {
    // new Date() 返回的是两个日期间相差的毫秒数 除以1000后代表秒数
    const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
    if (seconds < 30) {
      return '刚刚';
    }
    const dateInterval = {
      年: 3600 * 24 * 365,
      月: 3600 * 24 * 30,
      周: 3600 * 24 * 7,
      天: 3600 * 24,
      小时: 3600,
      分钟: 60,
      秒: 1
    };

    let counter = 0;
    for (const timeGapKey in dateInterval) {
      if (dateInterval.hasOwnProperty(timeGapKey)) {
        const timeGapValue = dateInterval[timeGapKey];
        counter = Math.floor((seconds - timeGapValue) / timeGapValue);
        if (counter > 0) {
          return `${counter} ${timeGapKey}前`;
        }
      }
    }
    return value;
  }

}
