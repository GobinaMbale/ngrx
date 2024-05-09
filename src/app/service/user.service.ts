import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from "../store/model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8085/user';
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, {responseType: "json"});
  }

  updateUser(username: string, user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + '/' + username, user, {responseType: "json"});
  }

  deleteUser(username: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + username, {responseType: "json"});
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + username, {responseType: "json"});
  }

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl, {responseType: "json"});
  }
}
