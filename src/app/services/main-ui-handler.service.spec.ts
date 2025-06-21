import { TestBed } from '@angular/core/testing';

import { MainUiHandlerService } from './main-ui-handler.service';

describe('MainUiHandlerService', () => {
  let service: MainUiHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainUiHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
