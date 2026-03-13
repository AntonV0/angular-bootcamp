import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsEffectComponent } from './signals-effect-component';

describe('SignalsEffectComponent', () => {
  let component: SignalsEffectComponent;
  let fixture: ComponentFixture<SignalsEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsEffectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsEffectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
