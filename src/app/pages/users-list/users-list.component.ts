import { RestService } from "./../../services/rest.service";
import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  users: User[];
  constructor(private _restService: RestService) {}

  ngOnInit() {
    this._restService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  deleteUser(id) {
    this._restService.deleteUser(id).subscribe(res => {
      console.log('user Deleted succesfully !! ');
      this._restService.getUsers().subscribe((data: User[]) => {
        this.users = data;
      });
    });
  }
}
