import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User} from '../../models/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() users: User[] | null = [];
  constructor() { }

  ngOnInit(): void {
  }

}
