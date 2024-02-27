import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Comment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private url = environment.api;

  private commentAddedSubject = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  createComment(comment: any): Observable<Comment> {
    return this.http.post<Comment>(`${this.url}/comments`, comment).pipe(
      tap(() => {
        this.commentAddedSubject.next(true);
      })
    );
  }

  getCommentAddedObservable(): Observable<boolean> {
    return this.commentAddedSubject.asObservable();
  }
}
