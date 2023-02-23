import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRuleRootComponent } from './business-rule-root.component';

describe('BusinessRuleRootComponent', () => {
  let component: BusinessRuleRootComponent;
  let fixture: ComponentFixture<BusinessRuleRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessRuleRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessRuleRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
