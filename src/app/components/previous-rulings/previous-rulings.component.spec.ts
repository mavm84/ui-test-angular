import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousRulingsComponent } from './previous-rulings.component';

describe('PreviousRulingsComponent', () => {
  let component: PreviousRulingsComponent;
  let fixture: ComponentFixture<PreviousRulingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousRulingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousRulingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
