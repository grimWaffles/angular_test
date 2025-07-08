import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingModelComponent } from './housing-model.component';

describe('HousingModelComponent', () => {
  let component: HousingModelComponent;
  let fixture: ComponentFixture<HousingModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HousingModelComponent]
    });
    fixture = TestBed.createComponent(HousingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
