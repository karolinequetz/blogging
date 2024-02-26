import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [HeaderComponent, PostComponent],
})
export class HomeComponent {}
