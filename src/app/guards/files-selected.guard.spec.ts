import { TestBed, async, inject } from '@angular/core/testing';

import { FilesSelectedGuard } from './files-selected.guard';
import {FileSharingService} from "../services/file-sharing/file-sharing.service";

describe('FilesSelectedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileSharingService, FilesSelectedGuard]
    });
  });

  it('should ...', inject([FilesSelectedGuard], (guard: FilesSelectedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
