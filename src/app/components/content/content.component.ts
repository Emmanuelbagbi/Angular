// content.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule], // Import SlideComponent here
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  activeTab: string = 'about';

  tabs = [
    { id: 'about', title: 'About Us', showSlider: false },
    { id: 'journey', title: 'Journey', showSlider: true }, // This tab will show the slider
    { id: 'vision', title: 'Vision', showSlider: false },
    { id: 'mission', title: 'Mission', showSlider: false }
  ];

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }

  isTabActive(tabId: string): boolean {
    return this.activeTab === tabId;
  }

  shouldShowSlider(): boolean {
    const activeTab = this.tabs.find(tab => tab.id === this.activeTab);
    return activeTab ? activeTab.showSlider : false;
  }
}