import { TestBed } from '@angular/core/testing';

import { AnimateOnscrollService } from './animate-onscroll.service';

describe('AnimateOnscrollService', () => {
  let service: AnimateOnscrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimateOnscrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
