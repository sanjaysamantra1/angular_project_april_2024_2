import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any;

  constructor(private usersService: UsersService) {
  }
  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    this.usersService.getAllUsers().subscribe(response => {
      this.users = response;
    })
  }

}
