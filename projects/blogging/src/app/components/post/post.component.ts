import {
  CommonModule,
  DatePipe,
  NgOptimizedImage,
  registerLocaleData,
} from '@angular/common';
import { Comment, Post } from '../../interfaces/post.interface';
import localeBr from '@angular/common/locales/pt';
import { PostsService } from './../../services/posts.service';
import { Component, LOCALE_ID } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
registerLocaleData(localeBr, 'pt');

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  providers: [PostsService, DatePipe, { provide: LOCALE_ID, useValue: 'pt' }],
  imports: [NgOptimizedImage, CommonModule, CommentComponent],
})
export class PostComponent {
  public post?: Post;

  constructor(private postsService: PostsService) {
    this.getPost();
  }

  private getPost() {
    this.postsService.getPosts().subscribe((posts) => {
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
