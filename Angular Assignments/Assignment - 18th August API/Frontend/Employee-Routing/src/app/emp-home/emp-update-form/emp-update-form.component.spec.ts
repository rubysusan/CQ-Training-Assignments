import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpUpdateFormComponent } from './emp-update-form.component';

describe('EmpUpdateFormComponent', () => {
  let component: EmpUpdateFormComponent;
  let fixture: ComponentFixture<EmpUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpUpdateFormComponent]
    });
    fixture = TestBed.createComponent(EmpUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
