import { Comment, ShowedComment } from './../../interfaces/post.interface';
import { Component, Input, LOCALE_ID } from '@angular/core';

import { CommonModule, DatePipe } from '@angular/common';
import { ButtonComponent } from '../../../../../waycarbon-lib/src/lib/components/button/button.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'pt' }],
  imports: [CommonModule, ButtonComponent],
})
export class CommentComponent {
  @Input() comments: Comment[] = [];

  ngOnInit() {}

  public get commentTree(): ShowedComment[] {
    return this.buildCommentTree(this.rootComments());
  }

  private rootComments(): Comment[] {
    return this.comments?.filter((comment) => comment?.respondsTo === null);
  }

  private nonRootComments(): Comment[] {
    return this.comments?.filter((comment) => comment?.respondsTo !== null);
  }
  private getReplies(comment: Comment, comments: Comment[]): Comment[] {
    return comments.filter((reply) => reply.respondsTo?.id === comment.id);
  }

  private buildCommentTree(comments: Comment[]): ShowedComment[] {
    return comments.map((comment) => {
      return {
        id: comment.id,
        author: comment.author,
        timestamp: comment.timestamp,
        content: comment.content,
        replies: this.buildCommentTree(
          this.getReplies(comment, this.nonRootComments())
        ),
      };
    });
  }
}
