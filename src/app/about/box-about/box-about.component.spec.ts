import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAboutComponent } from './box-about.component';

describe('BoxAboutComponent', () => {
  let component: BoxAboutComponent;
  let fixture: ComponentFixture<BoxAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxAboutComponent]
    });
    fixture = TestBed.createComponent(BoxAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
