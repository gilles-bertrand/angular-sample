import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../services/apirest.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private restService: ApirestService) { }

  ngOnInit() {
    this.restService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
  deleteUser(id) {
    this.restService.deleteUser(id).subscribe(res => {
      console.log('user Deleted succesfully !! ');
      this.restService.getUsers().subscribe((data: User[]) => {
        this.users = data;
      });
    });
  }
}
