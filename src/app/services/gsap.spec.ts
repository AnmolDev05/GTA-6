import { TestBed } from '@angular/core/testing';

import { Gsap } from './gsap';

describe('Gsap', () => {
  let service: Gsap;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gsap);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
