import { TestBed, inject } from '@angular/core/testing';

import { FileSharingService } from './file-sharing.service';

describe('FileSharingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileSharingService]
    });
  });

  it('should be created', inject([FileSharingService], (service: FileSharingService) => {
    expect(service).toBeTruthy();
  }));
});
