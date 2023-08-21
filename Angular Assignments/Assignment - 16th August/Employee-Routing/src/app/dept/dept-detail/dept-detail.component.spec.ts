import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptDetailComponent } from './dept-detail.component';

describe('DeptDetailComponent', () => {
  let component: DeptDetailComponent;
  let fixture: ComponentFixture<DeptDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptDetailComponent]
    });
    fixture = TestBed.createComponent(DeptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
