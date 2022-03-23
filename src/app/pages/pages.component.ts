import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { HttpServiceService } from '../services/http-service.service';
import { DataMapService } from '../services/data-map.service';
import { User } from '../models/user';
import { StateServiceService} from '../services/state-service.service';
import { combineLatestWith, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  public users$!: Observable<User[]>;
  // public users: Array<User>;
  constructor(private dataMapService: DataMapService, private stateService: StateServiceService) { }
 
  ngOnInit(): void {

    // this.dataMapService.setUsers(this.dataMapService.mappedUsers());
   
  }



}
