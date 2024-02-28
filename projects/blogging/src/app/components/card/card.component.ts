import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { ButtonComponent } from '../../../../../waycarbon-lib/src/lib/components/button/button.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [ButtonComponent, NgOptimizedImage, CommonModule],
})
export class CardComponent {
  @Input() user?: User;

  constructor() {}

  ngOnInit() {}
}
