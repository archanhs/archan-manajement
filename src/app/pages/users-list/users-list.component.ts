import { Component, OnInit } from '@angular/core';
import { IUser, IUserWrapper } from 'src/app/interfaces/i-user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private userServices: UserService) {}

  users: Array<IUser> = [];
  user: IUser = {} as IUser;

  ngOnInit(): void {
    this.onAll();
  }
  onAll(): void {
    this.userServices.all().subscribe((response: IUserWrapper) => {
      this.users = response.users;
      console.log(this.users);
    });
  }
}
