import { Component } from '@angular/core';

@Component({
  selector: 'app-indoor-collection',
  imports: [],
  templateUrl: './indoor-collection.component.html',
  styleUrl: './indoor-collection.component.css'
})
export class IndoorCollectionComponent {
  plantCollection = [
    {
      title: 'Philodendron',
      description: 'Philodendrons come in various leaf shapes and colors, making them a great complement to your home decor.',
      image: 'assets/philodendron.jpg'
    },
    {
      title: 'Calathea',
      image: 'assets/calathea.jpg'
    },
    {
      title: 'Air Purifying',
      image: 'assets/air-purifying.jpg'
    },
    {
      title: 'Low Light Tolerant',
      image: 'assets/low-light.jpg'
    }
  ];
}
