import { TestBed, async, inject } from '@angular/core/testing';

import { FilesSelectedGuard } from './files-selected.guard';

describe('FilesSelectedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilesSelectedGuard]
    });
  });

  it('should ...', inject([FilesSelectedGuard], (guard: FilesSelectedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
