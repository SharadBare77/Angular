import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GOTcastComponent } from './gotcast.component';

describe('GOTcastComponent', () => {
  let component: GOTcastComponent;
  let fixture: ComponentFixture<GOTcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GOTcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GOTcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
