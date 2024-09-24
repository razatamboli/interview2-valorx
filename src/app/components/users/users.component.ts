import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Iuser } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userArr !: Array<Iuser>;
  userObj !: any;
  

  constructor(private _user : UserService) { }

  ngOnInit(): void {
    this.userArr = this._user.fetchAllUsers();
  }

  onEdit(user : Iuser){
    this._user.onEdit(user)
  }

  onClone(username : string){
    this._user.createCloneCardofSameCard(username);
  }

}
