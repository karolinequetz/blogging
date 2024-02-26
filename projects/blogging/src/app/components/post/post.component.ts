import {
  CommonModule,
  DatePipe,
  NgOptimizedImage,
  registerLocaleData,
} from '@angular/common';
import { Post } from '../../interfaces/post.interface';
import localeBr from '@angular/common/locales/pt';
import { PostsService } from './../../services/posts.service';
import { Component, LOCALE_ID } from '@angular/core';
registerLocaleData(localeBr, 'pt');

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  providers: [PostsService, DatePipe, { provide: LOCALE_ID, useValue: 'pt' }],
})
export class PostComponent {
  public post?: Post;

  constructor(private postsService: PostsService) {
    this.getPost();
  }

  private getPost() {
    this.postsService.getPosts().subscribe((posts) => (this.post = posts));
  }
}
