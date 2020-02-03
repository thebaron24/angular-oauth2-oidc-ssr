import { TestBed } from '@angular/core/testing';

import { BrowserTokenStoreService } from './browser-token-store.service';

describe('BrowserTokenStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserTokenStoreService = TestBed.get(BrowserTokenStoreService);
    expect(service).toBeTruthy();
  });
});
