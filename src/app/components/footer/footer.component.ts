import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone:true,
  templateUrl: './footer.component.html',
  imports: [CommonModule], 
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  platforms = ['Instagram', 'Twitter', 'LinkedIn', 'Telegram', 'Pinterest'];
  activePlatform = 'Telegram';

  setActive(platform: string) {
    this.activePlatform = platform;
  }
}
