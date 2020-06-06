import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicksortAlgoComponent } from './quicksort-algo.component';

describe('QuicksortAlgoComponent', () => {
  let component: QuicksortAlgoComponent;
  let fixture: ComponentFixture<QuicksortAlgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicksortAlgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicksortAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
