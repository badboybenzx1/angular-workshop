import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopPipeComponent } from './workshop-pipe.component';

describe('WorkshopPipeComponent', () => {
  let component: WorkshopPipeComponent;
  let fixture: ComponentFixture<WorkshopPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
