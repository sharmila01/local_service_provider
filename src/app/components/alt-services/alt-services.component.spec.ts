import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltServicesComponent } from './alt-services.component';

describe('AltServicesComponent', () => {
  let component: AltServicesComponent;
  let fixture: ComponentFixture<AltServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
