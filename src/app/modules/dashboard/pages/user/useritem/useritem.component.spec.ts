/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UseritemComponent } from './useritem.component';

describe('UseritemComponent', () => {
  let component: UseritemComponent;
  let fixture: ComponentFixture<UseritemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseritemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
