import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpServiceService } from '../services/http-service.service';
import { DataMapService } from '../services/data-map.service';
import { User } from '../models/user';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  public users$!: Observable<Array<User>>;
  constructor(private dataMapService: DataMapService) { }
 
  ngOnInit(): void {
   this.users$ = this.dataMapService.mappedUsers();
  }

}
