import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaycarbonLibComponent } from './waycarbon-lib.component';

describe('WaycarbonLibComponent', () => {
  let component: WaycarbonLibComponent;
  let fixture: ComponentFixture<WaycarbonLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaycarbonLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaycarbonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
