import { Component, OnInit, Input, Output, OnChanges, SimpleChanges,
   SimpleChange, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';

export interface TopMenu {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements
  OnInit, OnChanges, AfterContentInit, AfterViewInit, OnDestroy {

  @Input() tabs: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'blue';
  @Input() titleColor = 'pink';
  @Input() indicatorColor = 'orange';
  @Output() tabSelected = new EventEmitter();
  selectIndex = -1;

  handleClick(index: number) {
    this.selectIndex = index;
    this.tabSelected.emit(this.tabs[this.selectIndex]);
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(SimpleChange);
  }

  ngOnInit() {
    console.log('组件初始化完成');
  }

  ngAfterContentInit() {
    console.log('组件content初始化');
  }

  // ngAfterContentChecked(): void {
  //   console.log('组件content脏值检测');
  // }

  ngAfterViewInit(): void {
    console.log('组件视图初始化');
  }

  // ngAfterViewChecked(): void {
  //   console.log('组件视图脏值检测');
  // }

  ngOnDestroy(): void {
    console.log('组件销毁');
  }



}
