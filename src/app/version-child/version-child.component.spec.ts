/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VersionChildComponent } from './version-child.component';

describe('VersionChildComponent', () => {
  let component: VersionChildComponent;
  let fixture: ComponentFixture<VersionChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
