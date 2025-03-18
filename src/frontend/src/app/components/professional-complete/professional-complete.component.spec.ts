import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCompleteComponent } from './professional-complete.component';

describe('ProfessionalCompleteComponent', () => {
  let component: ProfessionalCompleteComponent;
  let fixture: ComponentFixture<ProfessionalCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
