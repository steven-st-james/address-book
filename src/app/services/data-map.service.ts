import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { User } from '../models/user';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataMapService {

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

}
