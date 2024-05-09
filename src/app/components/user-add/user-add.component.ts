import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import { CommonModule } from '@angular/common';
import { User } from '../../store/model/user.model';
import { createUser, getUser, updateUser } from '../../store/action/user.action';
import { selectLoadedUser } from '../../store/selector/user.selector';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit, OnDestroy {
  user: User = {id: null, username: '', password: '', firstName: '', lastName: '', email: '', phone: ''};
  subscription: Subscription = new Subscription();
  userForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  });
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<User>,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const username = params.get('username');
      if (username) {
        this.store.dispatch(getUser({ username: username }));
        this.subscription = this.store.select(selectLoadedUser).subscribe(user => {
          if (user == null) {
            return;
          }
          this.user = user;
          this.setDataInForm(this.user);
        })
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  create(): void {
    this.store.dispatch(createUser({ user: this.getForm() }));
    this.back();
  }

  update(): void {
    const user = this.getForm();
    this.store.dispatch(updateUser(
      { username: user.username, user: user }));
    this.back();
  }

  setDataInForm(user: User): void {
    this.userForm.get('username')?.setValue(user.username);
    this.userForm.get('password')?.setValue(user.password);
    this.userForm.get('firstName')?.setValue(user.firstName);
    this.userForm.get('lastName')?.setValue(user.lastName);
    this.userForm.get('email')?.setValue(user.email);
    this.userForm.get('phone')?.setValue(user.phone);
  }

  getForm(): User {
    return {
      ...this.user,
      username: this.userForm.get('username')?.value ?? '',
      password: this.userForm.get('password')?.value ?? '',
      firstName: this.userForm.get('firstName')?.value ?? '',
      lastName: this.userForm.get('lastName')?.value ?? '',
      email: this.userForm.get('email')?.value ?? '',
      phone: this.userForm.get('phone')?.value ?? ''
    }
  }

  back(): void {
    this.router.navigate(['']).then();
  }

}
