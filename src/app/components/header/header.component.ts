import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
