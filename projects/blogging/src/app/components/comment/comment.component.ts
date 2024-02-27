import { Component, Input, LOCALE_ID, signal } from '@angular/core';

import { CommonModule, DatePipe } from '@angular/common';
import { ButtonComponent } from '../../../../../waycarbon-lib/src/lib/components/button/button.component';
import { CommentsService } from '../../services/comments.service';
import { FormsModule } from '@angular/forms';
import { Comment, ShowedComment } from '../../interfaces/comment.interface';
import { Author } from '../../interfaces/post.interface';

@Component({
  selector: 'app-comment',
  standalone: true,
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'pt' }],
  imports: [CommonModule, ButtonComponent, FormsModule],
})
export class CommentComponent {
  @Input() comments: Comment[] = [];
  @Input() author: Author = { id: '', username: '' };
  @Input() postId: string = '';

  public isReplying: boolean = false;
  public replyCommentId: number | null = null;
  public newCommentContent: string = '';
  public loading = signal(false);

  ngOnInit() {}

  public toggleReplying(commentId: number): void {
    this.replyCommentId = this.replyCommentId === commentId ? null : commentId;
  }

  constructor(private commentsService: CommentsService) {}
  public get commentTree(): ShowedComment[] {
    return this.buildCommentTree(this.rootComments());
  }

  public onSubmit(comment: Comment): void {
    const newComment: any = {
      author: this.author,
      postId: this.postId,
      timestamp: new Date().toISOString(),
      respondsTo: { id: comment.id },
      content: this.newCommentContent,
    };

    console.log(newComment);

    this.commentsService.createComment(newComment).subscribe({
      next: () => {
        this.loading.set(false);
        this.newCommentContent = '';
        this.replyCommentId = null;
      },
    });
  }

  public onCancel() {
    this.newCommentContent = '';
    this.replyCommentId = null;
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
