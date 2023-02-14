import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSLrMComponent } from './video-s-lr-m.component';

describe('VideoSLrMComponent', () => {
  let component: VideoSLrMComponent;
  let fixture: ComponentFixture<VideoSLrMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoSLrMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoSLrMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
