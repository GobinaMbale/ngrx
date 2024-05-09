import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Subscription} from "rxjs";
import { User } from '../../store/model/user.model';
import { getUser } from '../../store/action/user.action';
import { selectLoadedUser } from '../../store/selector/user.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  user: User = {id: null, username: '', password: '', firstName: '', lastName: '', email: '', phone: ''};

  constructor(
    private store: Store<User>,
    private route: ActivatedRoute) {}

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
        })
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
