import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCombo } from './combo-box.component';

describe('MyCombo', () => {
  let component: MyCombo;
  let fixture: ComponentFixture<MyCombo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCombo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCombo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
