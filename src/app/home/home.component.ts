import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSliderComponent } from '../components/hero-slider/hero-slider.component';

@Component({
  selector: 'app-home',
  standalone: true, // Required for using `imports` in @Component
  imports: [CommonModule, HeroSliderComponent], // Importing CommonModule is necessary
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
