import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-slider',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.css']
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  slides =[
    {
      image: '/assets/IMAGE/carlo-poblador-IgVz0_YwTD8-unsplash.jpg',
      subtitle: 'Growing Smarter',
      title: 'Growing Agriculture Through Data-Driven <span class="text-gold">Innovation</span>',
      description: 'Explore how integrating environmental, soil, and crop-specific data can revolutionize crop yield prediction, guiding farmers to make more informed decisions.',
      buttonText: 'Get Started',
      buttonLink: '#values'
    },
    {
      image: '/assets/IMAGE/tim-mossholder-xDwEa2kaeJA-unsplash.jpg',
      subtitle: 'Predicting Growth',
      title: 'Predicting Crop Yield with <span class="text-gold">Machine Learning</span>',
      description: 'Join us in revolutionizing agriculture through innovative machine learning models that predict crop yield and enhance food security across the globe.',
      buttonText: 'Get Started',
      buttonLink: '#events'
    },
    {
      image: '/assets/IMAGE/henry-perks-aOTBPSDjgj0-unsplash.jpg',
      subtitle: 'Empowering Farmers',
      title: 'Serving with <span class="text-gold">Purpose</span>',
      description: 'Discover how machine learning is shaping the future of farming by addressing challenges like data scarcity and climate variability to ensure food security.',
      buttonText: 'Get Started',
      buttonLink: '#events'
    },    
    {
      image: '/assets/IMAGE/jed-owen-1JgUGDdcWnM-unsplash.jpg',
      subtitle: 'Optimizing Yields',
      title: 'Achieving Accurate Yield Predictions with <span class="text-gold">ML</span>',
      description: 'Join us in leveraging cutting-edge machine learning models to predict crop yield more accurately, ensuring resource optimization and environmental sustainability.',
      buttonText: 'Get Started',
      buttonLink: '#events'
    },
    {
      image: '/assets/IMAGE/dan-meyers-IHOSOqpm3b8-unsplash.jpg',
      subtitle: 'Smart Solutions',
      title: 'Building a Smarter Agricultural Community with <span class="text-gold">Tech</span>',
      description: 'Work alongside experts in the field to explore how ML-driven predictions can transform agriculture and reduce risks like drought and pest infestations.',
      buttonText: 'Get Started',
      buttonLink: '#values'
    },
    {
      image: '/assets/IMAGE/tony-pham-TV7m_tpmqhw-unsplash.jpg',
      subtitle: 'Making a Difference',
      title: 'Making an Impact in Agriculture with <span class="text-gold">Innovation</span>',
      description: 'Explore how advanced ML models and collaborative efforts can drive agriculture toward sustainability, helping farmers and communities thrive.',
      buttonText: 'Get Started',
      buttonLink: '#events'
    }
  ];
  
  
  

  
  currentSlide = 0;
  slideInterval: any;

  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    this.stopSlideshow();
  }

  showSlide(index: number) {
    this.currentSlide = index;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  startSlideshow() {
    this.slideInterval = setInterval(() => this.nextSlide(), 6000);
  }

  stopSlideshow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}
