import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondScreen } from './second-screen';

describe('SecondScreen', () => {
  let component: SecondScreen;
  let fixture: ComponentFixture<SecondScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
