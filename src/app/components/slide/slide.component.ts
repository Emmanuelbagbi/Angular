import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  NgZone
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

@Component({
  selector: 'app-slide',
  standalone: true,
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  imports: [CommonModule]
})
export class SlideComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderList') sliderList!: ElementRef<HTMLDivElement>;
  @ViewChild('nextButton') nextButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('prevButton') prevButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('stepWrapper') stepWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('stepTemplate') stepTemplate!: ElementRef<HTMLHeadingElement>;
  @ViewChild('totalElement') totalElement!: ElementRef<HTMLHeadingElement>;

  slides = [
    {
      image:
        'https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f74ff2fe8b0b912b97_slide-1.avif',
      caption: 'Layout nº001'
    },
    {
      image:
        'https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f7cf52dd961b48a1e2_slide-2.avif',
      caption: 'Layout nº002'
    },
    {
      image:
        'https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f7f7cce73267703347_slide-3.avif',
      caption: 'Layout nº003'
    },
    {
      image:
        'https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f7ccfd203c82a46798_slide-4.avif',
      caption: 'Layout nº004'
    }
  ];

  private currentIndex = 0;
  private draggable: any;
  private allSteps: HTMLElement[] = [];
  private slideWidth = 0;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(Draggable);

    this.ngZone.onStable.subscribe(() => {
      this.initSlider();
    });
  }

  ngOnDestroy(): void {
    this.draggable?.kill();
  }

  private initSlider(): void {
    const slideElements = Array.from(
      this.sliderList.nativeElement.querySelectorAll('[data-slider="slide"]')
    ) as HTMLElement[];

    if (slideElements.length === 0) return;

    // Set total count dynamically
    const slidesTotal = slideElements.length;
    this.totalElement.nativeElement.textContent =
      slidesTotal < 10 ? `0${slidesTotal}` : `${slidesTotal}`;

    // Create steps
    this.stepWrapper.nativeElement.innerHTML = '';
    slideElements.forEach((_, index) => {
      const stepClone = this.stepTemplate.nativeElement.cloneNode(true) as HTMLElement;
      stepClone.textContent = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
      stepClone.setAttribute('data-slide-count', 'step');
      this.stepWrapper.nativeElement.appendChild(stepClone);
    });

    this.allSteps = Array.from(
      this.stepWrapper.nativeElement.querySelectorAll('[data-slide-count="step"]')
    ) as HTMLElement[];

    this.slideWidth =
      slideElements[0].offsetWidth +
      parseFloat(getComputedStyle(slideElements[0]).marginRight);

    // Position slides horizontally
    gsap.set(slideElements, {
      x: (i) => i * this.slideWidth
    });

    // Set initial active slide
    slideElements[0].classList.add('active');

    // Draggable
    this.draggable = Draggable.create(this.sliderList.nativeElement, {
      type: 'x',
      bounds: {
        minX: -(slidesTotal - 1) * this.slideWidth,
        maxX: 0
      },
      inertia: true,
      onDrag: () => this.updateActiveSlide(slideElements),
      onThrowUpdate: () => this.updateActiveSlide(slideElements),
      snap: {
        x: (x) => Math.round(x / this.slideWidth) * this.slideWidth
      }
    });

    // Button handlers
    this.nextButton.nativeElement.addEventListener('click', () => {
      this.goToSlide(this.currentIndex + 1, slideElements, slidesTotal);
    });

    this.prevButton.nativeElement.addEventListener('click', () => {
      this.goToSlide(this.currentIndex - 1, slideElements, slidesTotal);
    });
  }

  private updateActiveSlide(slides: HTMLElement[]): void {
    const newIndex = Math.round(-this.draggable[0].x / this.slideWidth);
    if (newIndex !== this.currentIndex) {
      slides[this.currentIndex].classList.remove('active');
      this.currentIndex = newIndex;
      slides[this.currentIndex].classList.add('active');

      gsap.to(this.allSteps, {
        y: `${-100 * this.currentIndex}%`,
        ease: 'power3.out',
        duration: 0.3
      });
    }
  }

  private goToSlide(index: number, slides: HTMLElement[], slidesTotal: number): void {
    index = (index + slidesTotal) % slidesTotal;

    gsap.to(this.draggable[0].target, {
      x: -index * this.slideWidth,
      duration: 0.7,
      ease: 'power3.out',
      onUpdate: () => this.updateActiveSlide(slides)
    });
  }
}
