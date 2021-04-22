import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopFormBindingComponent } from './workshop-form-binding.component';

describe('WorkshopFormBindingComponent', () => {
  let component: WorkshopFormBindingComponent;
  let fixture: ComponentFixture<WorkshopFormBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopFormBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopFormBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
