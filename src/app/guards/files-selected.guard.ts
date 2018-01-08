import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FileSharingService } from '../services/file-sharing/file-sharing.service';

@Injectable()
export class FilesSelectedGuard implements CanActivate {

  canActivate() {
    return this.fileService.get('bpmn') != null;
  }

  constructor(private fileService: FileSharingService) { }
}
