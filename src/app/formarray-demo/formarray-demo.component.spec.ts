import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrayDemoComponent } from './formarray-demo.component';

describe('FormarrayDemoComponent', () => {
  let component: FormarrayDemoComponent;
  let fixture: ComponentFixture<FormarrayDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormarrayDemoComponent]
    });
    fixture = TestBed.createComponent(FormarrayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
