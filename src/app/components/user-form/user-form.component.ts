import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm !: FormGroup;

  constructor(private _user : UserService) { }

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      age: new FormControl(40, Validators.required),
      gender: new FormControl("Male", Validators.required),
      company: new FormControl("Valorx", Validators.required),
      email: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      joinedDate: new FormControl("2017-08-19T01:00:19 -06:-30", Validators.required),
      state: new FormControl("Maharashtra", Validators.required),
      about: new FormControl(null, Validators.required),
      isActive: new FormControl(true, Validators.required)
    })
  }

  onUserForm() {
    if(this.userForm.valid) {
      let obj = this.userForm.value;
      this.AddUserObj(obj)
    }
  }

  AddUserObj(obj : Iuser){
    return this._user.addUser(obj);
  }

  onEdit(){
    edit
  }

}
