import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHookOninit } from './web-hook-oninit';

describe('WebHookOninit', () => {
  let component: WebHookOninit;
  let fixture: ComponentFixture<WebHookOninit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebHookOninit],
    }).compileComponents();

    fixture = TestBed.createComponent(WebHookOninit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
