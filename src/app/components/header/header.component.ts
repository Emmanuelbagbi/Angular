import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  openDropdown: string | null = null;
  openMobileDropdown: string | null = null;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
    if (!this.isMobileMenuOpen) {
      this.openMobileDropdown = null;
    }
  }

  toggleDropdown(menu: string): void {
    this.openDropdown = this.openDropdown === menu ? null : menu;
  }

  toggleMobileDropdown(menu: string): void {
    this.openMobileDropdown = this.openMobileDropdown === menu ? null : menu;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }
}