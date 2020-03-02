import { Directive, ElementRef, Renderer2, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective {
  @HostBinding('style.grid-area') gridArea = 'image';
  @Input() @HostBinding('style.width') height = '2rem';
  @Input() @HostBinding('style.height') width = '2rem';
  @Input() @HostBinding('style.object-fit') objectFit = 'cover';
  @Input() objectStyle = 'cover';
  constructor(private elr: ElementRef, private rd2: Renderer2) {}
  // ngOnInit(): void {
  //   this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image');
  //   this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemImage);
  //   this.rd2.setStyle(this.elr.nativeElement, 'height', this.appGridItemImage);
  //   this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.objectStyle);
  // }

}

