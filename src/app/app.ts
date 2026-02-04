import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  yesScale = signal(1);
  accepted = signal(false);

  onNo() {
    this.yesScale.update(v => v + 0.2);
  }

  onYes() {
    this.accepted.set(true);
  }
}
