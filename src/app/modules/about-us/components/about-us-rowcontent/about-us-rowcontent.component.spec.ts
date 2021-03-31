import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsRowcontentComponent } from './about-us-rowcontent.component';

describe('AboutUsRowcontentComponent', () => {
  let component: AboutUsRowcontentComponent;
  let fixture: ComponentFixture<AboutUsRowcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsRowcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsRowcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
