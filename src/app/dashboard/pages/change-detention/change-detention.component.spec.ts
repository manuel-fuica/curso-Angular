import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetentionComponent } from './change-detention.component';

describe('ChangeDetentionComponent', () => {
  let component: ChangeDetentionComponent;
  let fixture: ComponentFixture<ChangeDetentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetentionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
