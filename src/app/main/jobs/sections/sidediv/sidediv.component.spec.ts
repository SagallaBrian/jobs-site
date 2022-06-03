import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidedivComponent } from './sidediv.component';

describe('SidedivComponent', () => {
  let component: SidedivComponent;
  let fixture: ComponentFixture<SidedivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidedivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
