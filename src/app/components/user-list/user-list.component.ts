import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import { User } from '../../store/model/user.model';
import { selectError, selectLoading, selectUsers } from '../../store/selector/user.selector';
import { deleteUser, listUsers } from '../../store/action/user.action';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$ = this.store.select(selectUsers); // Observable pour récupérer la liste des utilisateurs
  loading$ = this.store.select(selectLoading); // Observable pour récupérer l'état de chargement
  error$ = this.store.select(selectError); // Observable pour récupérer l'erreur

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getList();
  }

  delete(username: string): void {
    this.store.dispatch(deleteUser({ username: username }));
  }

  getList(): void {
    this.store.dispatch(listUsers());
  }
}
