import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodloreComponent } from './godlore.component';

describe('AboutComponent', () => {
  let component: GodloreComponent;
  let fixture: ComponentFixture<GodloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
