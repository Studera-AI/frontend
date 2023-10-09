import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeframePage } from './timeframe.page';

describe('TimeframePage', () => {
  let component: TimeframePage;
  let fixture: ComponentFixture<TimeframePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TimeframePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
