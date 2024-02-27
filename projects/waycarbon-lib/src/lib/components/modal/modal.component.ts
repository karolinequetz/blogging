import { animate, style, transition, trigger } from '@angular/animations';

import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  public show: boolean = false;

  toggle() {
    this.show = !this.show;
  }
}
