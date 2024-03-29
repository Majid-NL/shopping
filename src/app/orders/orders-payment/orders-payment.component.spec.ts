import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPaymentComponent } from './orders-payment.component';

describe('OrdersPaymentComponent', () => {
  let component: OrdersPaymentComponent;
  let fixture: ComponentFixture<OrdersPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
