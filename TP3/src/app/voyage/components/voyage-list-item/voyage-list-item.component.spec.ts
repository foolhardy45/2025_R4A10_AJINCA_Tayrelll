import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageListItemComponent } from './voyage-list-item.component';

describe('VoyageListItemComponent', () => {
  let component: VoyageListItemComponent;
  let fixture: ComponentFixture<VoyageListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyageListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyageListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
