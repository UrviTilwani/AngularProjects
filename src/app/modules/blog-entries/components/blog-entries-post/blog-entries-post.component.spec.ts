import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntriesPostComponent } from './blog-entries-post.component';

describe('BlogEntriesPostComponent', () => {
  let component: BlogEntriesPostComponent;
  let fixture: ComponentFixture<BlogEntriesPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogEntriesPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntriesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
