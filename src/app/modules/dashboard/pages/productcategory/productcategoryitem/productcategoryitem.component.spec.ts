import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcategoryitemComponent } from './productcategoryitem.component';

describe('ProductcategoryitemComponent', () => {
  let component: ProductcategoryitemComponent;
  let fixture: ComponentFixture<ProductcategoryitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcategoryitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcategoryitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
