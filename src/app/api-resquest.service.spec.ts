import { TestBed } from '@angular/core/testing';

import {ApiResquestService} from './api-resquest.service';

describe('ApiResquestService', () => {
  let service: ApiResquestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiResquestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
