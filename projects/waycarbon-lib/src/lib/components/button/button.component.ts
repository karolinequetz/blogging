import { Component, EventEmitter, Input, Output } from '@angular/core';

type BtnVariants = 'primary' | 'secondary' | 'basic';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input('btn-text') btnText: string = '';
  @Input() loading?: boolean = false;
  @Input() variant: BtnVariants = 'primary';
  @Output('submit') onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}
