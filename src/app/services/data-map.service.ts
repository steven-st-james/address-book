import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { User } from '../models/user';
import { BehaviorSubject, concatMap, first, map, Observable, Subject, switchMap, takeUntil } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataMapService {
  private readonly _users$ = new BehaviorSubject<User[]>([]);

  readonly users$ = this._users$.asObservable();
  constructor(private httpService: HttpServiceService) { }

   mappedUsers(): Observable<Array<User>> {
    return this.httpService.getUsers()
    .pipe(map(r => r.results), map((r: Array<any>) => {
      return r.map((user: any): User => {
        return {
          id: user.login.uuid,
          firstName: user.name.first,
          lastName: user.name.last,
          phoneNumber: user.phone,
          photo: user.picture.thumbnail
        }
      })
    }))
  }

  getUsers(): Observable<User[]> {
    return this._users$;
  }

   setUsers(users: User[]) { 
    this._users$.next(users);
  }

  fetchUsers() {
    // return this.mappedUsers().pipe(concatMap((users: User[]) => {
    //   this.setUsers(users);
    //   return this.getUsers();
    // }))
    this.mappedUsers().pipe(map(u => this._users$.next(u)));
    this._users$.complete();
  }
  
}


