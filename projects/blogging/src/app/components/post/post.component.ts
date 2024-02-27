import {
  CommonModule,
  DatePipe,
  NgOptimizedImage,
  registerLocaleData,
} from '@angular/common';
import { PostWithComments } from '../../interfaces/post.interface';
import localeBr from '@angular/common/locales/pt';
import { PostsService } from './../../services/posts.service';
import { Component, LOCALE_ID } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { Comment } from '../../interfaces/comment.interface';
import { CommentsService } from '../../services/comments.service';
import { Subscription } from 'rxjs';
registerLocaleData(localeBr, 'pt');

const USER_ID = '1';
@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  providers: [PostsService, DatePipe, { provide: LOCALE_ID, useValue: 'pt' }],
  imports: [NgOptimizedImage, CommonModule, CommentComponent],
})
export class PostComponent {
  private subscription: Subscription = new Subscription();

  public post?: PostWithComments;

  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService
  ) {
    this.getPost();
  }

  ngOnInit(): void {
    this.subscription = this.commentsService
      .getCommentAddedObservable()
      .subscribe(() => {
        this.getPost();
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private getPost() {
    this.postsService.getPostByIdFetchComments(USER_ID).subscribe((posts) => {
      if (posts.timestamp && !isNaN(new Date(posts.timestamp).getTime())) {
        const datePipe = new DatePipe('pt');
        const formattedDate = datePipe.transform(
          new Date(posts.timestamp),
          'dd MMM, y'
        );
        posts.timestamp = formattedDate as string;
        posts.comments = this.formatDate(posts.comments);
      }
      this.post = posts;
    });
  }

  private formatDate(comments: Comment[]) {
    const datePipe = new DatePipe('pt');
    const commentsFormatted = comments.map((comment) => ({
      ...comment,
      timestamp:
        comment.timestamp && !isNaN(new Date(comment.timestamp).getTime())
          ? datePipe.transform(
              new Date(comment.timestamp),
              "dd MMM yyyy, 'às' HH'h'mm'"
            )
          : null,
    }));
    return commentsFormatted as Comment[];
  }
}
