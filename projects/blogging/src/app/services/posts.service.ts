import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { PostWithComments } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = environment.api;

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<PostWithComments>(`${this.url}/posts`);
  }

  getPostByIdFetchComments(id: string) {
    return this.http.get<PostWithComments>(
      `${this.url}/posts/${id}?_embed=comments`
    );
  }
}
