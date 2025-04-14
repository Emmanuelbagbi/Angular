import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  imports: [CommonModule], 
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: 'Ordering for Delivery?',
      answer: 'We offer potting on in store purchases or you are welcome to bring in your own and we can pot them for you. There is a fee depending one what supplies are used. Visit us or call us for more details.',
      isOpen: false
    },
    {
      question: 'Potting Services',
      answer: 'We offer potting on in store purchases or you are welcome to bring in your own and we can pot them for you. There is a fee depending one what supplies are used. Visit us or call us for more details.',
      isOpen: false
    },
    {
      question: 'Do we ship plants?',
      answer: 'We offer potting on in store purchases or you are welcome to bring in your own and we can pot them for you. There is a fee depending one what supplies are used. Visit us or call us for more details.',
      isOpen: false
    },
    {
      question: 'Ordering for Pick up?',
      answer: 'We offer potting on in store purchases or you are welcome to bring in your own and we can pot them for you. There is a fee depending one what supplies are used. Visit us or call us for more details.',
      isOpen: false
    }
  ];

  toggle(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
