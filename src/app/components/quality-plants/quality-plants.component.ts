import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quality-plants',
  templateUrl: './quality-plants.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./quality-plants.component.css']
})
export class QualityPlantsComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  showThumbnail = true;
  isPlaying = false;

  videoSources = [
    { src: '/assets/IMAGE/Video2.mp4', type: 'video/mp4' }
  ];

  thumbnailSrc = 'assets/images/your-thumbnail.jpg';

  ngAfterViewInit() {
    this.setupVideoErrorHandling();
  }

  private setupVideoErrorHandling() {
    const video = this.videoElement.nativeElement;
    video.addEventListener('error', () => {
      console.error('Video error:', video.error);
      this.handleVideoError();
    });
  }

  private handleVideoError() {
    this.showThumbnail = true;
    this.isPlaying = false;
    console.error('Failed to load video. Showing thumbnail.');
  }

  playVideo() {
    const video = this.videoElement.nativeElement;

    this.showThumbnail = false;
    video.play()
      .then(() => {
        this.isPlaying = true;
      })
      .catch(error => {
        console.error('Play failed:', error);
        this.handleVideoError();
      });
  }

  pauseVideo() {
    const video = this.videoElement.nativeElement;
    video.pause();
    this.isPlaying = false;
    this.showThumbnail = true;
  }

  togglePlay() {
    const video = this.videoElement.nativeElement;

    if (video.paused) {
      this.playVideo();
    } else {
      this.pauseVideo();
    }
  }

  onVideoEnd() {
    this.isPlaying = false;
    this.showThumbnail = true;
    this.videoElement.nativeElement.currentTime = 0;
  }
}
