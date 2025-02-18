import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVoyageComponent } from './single-voyage.component';

describe('SingleVoyageComponent', () => {
  let component: SingleVoyageComponent;
  let fixture: ComponentFixture<SingleVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleVoyageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
