import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavV2Component } from './admin-nav-v2.component';

describe('AdminNavV2Component', () => {
  let component: AdminNavV2Component;
  let fixture: ComponentFixture<AdminNavV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
