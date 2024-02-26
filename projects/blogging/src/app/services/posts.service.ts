import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = environment.api;

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post>(`${this.url}/posts`);
  }
}
