import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    { id: 1, name: 'Plumbing Services', rating: 4.5, description: 'Professional plumbing services.' },
    { id: 2, name: 'Electrical Services', rating: 4.8, description: 'Expert electrical services.' },
    { id: 3, name: 'Cleaning Services', rating: 4.2, description: 'Reliable cleaning services for homes and offices.' },
    { id: 4, name: 'Gardening Services', rating: 4.7, description: 'Beautiful landscaping and gardening services.' },
    { id: 5, name: 'Carpet Cleaning', rating: 4.9, description: 'Top-notch carpet cleaning services.' }
  ];

  constructor(private router: Router) {}

  // Sort services by rating in descending order
  sortedServices = this.services.sort((a, b) => b.rating - a.rating);

  navigateToProfile(serviceId: number) {
    this.router.navigate(['/profile', serviceId]); // Navigate to the profile page
  }
}
