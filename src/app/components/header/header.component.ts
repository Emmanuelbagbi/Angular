import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true, // Added this critical flag
  templateUrl: './header.component.html',
  imports: [CommonModule], // Keep this for *ngIf support
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  currentYear: number = new Date().getFullYear();
  isScrolled: boolean = false;
  isMobileMenuOpen: boolean = false;
  openDropdown: string | null = null;
  openMobileDropdown: string | null = null;

  // Track scroll position
  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  // Toggle mobile menu
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.openMobileDropdown = null;
    }
  }

  // Handle desktop dropdowns
  toggleDropdown(menu: string): void {
    this.openDropdown = this.openDropdown === menu ? null : menu;
    // Close mobile dropdown if opening desktop one
    if (this.openDropdown) {
      this.openMobileDropdown = null;
    }
  }

  // Handle mobile dropdowns
  toggleMobileDropdown(menu: string): void {
    this.openMobileDropdown = this.openMobileDropdown === menu ? null : menu;
  }

  // Close all dropdowns
  closeDropdowns(): void {
    this.openDropdown = null;
    this.openMobileDropdown = null;
  }

  // Close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown') && !target.closest('.mobile-dropdown')) {
      this.closeDropdowns();
    }
  }
}