import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface PanelSection {
  id: number;
  title: string;
  content: string;
  bgImage: string;
}


@Component({
  selector: 'app-plant-section-components',
  imports: [CommonModule],
  templateUrl: './plant-section-components.component.html',
  styleUrl: './plant-section-components.component.scss'
})
export class PlantSectionComponentsComponent implements OnInit {
  isInitialized = false;
  activeSection: number | null = null;
  
  sections: PanelSection[] = [
    { 
      id: 1, 
      title: 'Mountains', 
      content: 'Explore majestic mountain ranges',
      bgImage: '/assets/IMAGE/farm1.jpg'
    },
    { 
      id: 2, 
      title: 'Oceans', 
      content: 'Discover deep blue oceans',
      bgImage: '/assets/IMAGE/farm3.jpg'
    },
    { 
      id: 3, 
      title: 'Mountains', 
      content: 'Explore majestic mountain ranges',
      bgImage: '/assets/IMAGE/Farm4.jpg'
    },
    { 
      id: 4, 
      title: 'Oceans', 
      content: 'Discover deep blue oceans',
      bgImage: '/assets/IMAGE/3.jpg'
    },
    { 
      id: 5, 
      title: 'Oceans', 
      content: 'Discover deep blue oceans',
      bgImage: '/assets/IMAGE/2.jpg'
    },
    // Add more sections...
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isInitialized = true;
    }, 200);
  }

  activateSection(id: number) {
    if (this.activeSection === id) return;
    this.activeSection = id;
  }

  closeSection(event: MouseEvent) {
    event.stopPropagation();
    this.activeSection = null;
  }
}