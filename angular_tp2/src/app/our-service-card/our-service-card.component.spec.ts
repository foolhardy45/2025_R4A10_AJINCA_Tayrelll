import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServiceCardComponent } from './our-service-card.component';

describe('OurServiceCardComponent', () => {
  let component: OurServiceCardComponent;
  let fixture: ComponentFixture<OurServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServiceCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
