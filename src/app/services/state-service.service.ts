import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { DataMapService} from './data-map.service';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class StateServiceService {
  // initialState!: T;
 constructor() {

 }

 
}


