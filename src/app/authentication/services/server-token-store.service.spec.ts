import { TestBed } from '@angular/core/testing';

import { ServerTokenStoreService } from './server-token-store.service';

describe('ServerTokenStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerTokenStoreService = TestBed.get(ServerTokenStoreService);
    expect(service).toBeTruthy();
  });
});
