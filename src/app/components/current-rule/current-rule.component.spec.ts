import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRuleComponent } from './current-rule.component';

describe('CurrentRuleComponent', () => {
  let component: CurrentRuleComponent;
  let fixture: ComponentFixture<CurrentRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
