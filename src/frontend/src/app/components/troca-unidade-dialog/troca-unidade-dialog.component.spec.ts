import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaUnidadeDialogComponent } from './troca-unidade-dialog.component';

describe('TrocaUnidadeDialogComponent', () => {
  let component: TrocaUnidadeDialogComponent;
  let fixture: ComponentFixture<TrocaUnidadeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrocaUnidadeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrocaUnidadeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
