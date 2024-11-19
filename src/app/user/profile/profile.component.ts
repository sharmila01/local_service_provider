import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  serviceId: number = 0;
  profiles: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.serviceId = +params.get('serviceId')!; // Get the service ID from the route parameter
      this.loadProfiles(this.serviceId); // Fetch the profiles based on serviceId
    });
  }

  loadProfiles(serviceId: number) {
    // Simulated service profiles (can be replaced with a real service call)
    const allProfiles = [
      { id: 1, serviceId: 5, name: 'John Doe', rating: 4.5, description: 'Experienced plumber with 10 years of experience.' },
      { id: 2, serviceId: 5, name: 'Jane Smith', rating: 4.7, description: 'Certified plumber for all your needs.' },
      { id: 3, serviceId: 5, name: 'James Wilson', rating: 4.8, description: 'Professional electrician with 15 years of experience.' },
      { id: 4, serviceId: 5, name: 'Mike Johnson', rating: 4.3, description: 'Plumbing expert specializing in repairs.' },
    ];

    // Filter profiles based on the selected serviceId
    this.profiles = allProfiles.filter(profile => profile.serviceId === serviceId);
  }
}
