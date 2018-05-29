import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgimgComponent } from './svgimg.component';

describe('SvgimgComponent', () => {
  let component: SvgimgComponent;
  let fixture: ComponentFixture<SvgimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
