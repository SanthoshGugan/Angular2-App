import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MersalComponent } from './mersal.component';

describe('MersalComponent', () => {
  let component: MersalComponent;
  let fixture: ComponentFixture<MersalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MersalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MersalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
