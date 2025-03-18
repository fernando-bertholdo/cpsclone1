import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpandedComponent } from './list-expanded.component';

describe('ListExpandedComponent', () => {
  let component: ListExpandedComponent;
  let fixture: ComponentFixture<ListExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListExpandedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
