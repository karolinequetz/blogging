import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = environment.api;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  getUserById(id: string) {
    return this.http.get<User>(`${this.url}/users/${id}`);
  }
}
