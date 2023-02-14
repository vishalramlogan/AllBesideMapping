import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {VideoStreamingService} from 'src/app/video-streaming.service';
import { LowerResolution } from '../../video-streaming.model'; 

@Component({
  selector: 'app-video-s-lr-m',
  templateUrl: './video-s-lr-m.component.html',
  styleUrls: ['./video-s-lr-m.component.scss']
})
export class VideoSLrMComponent implements OnInit{
  Message: string;
 
  constructor(public videoService:VideoStreamingService, private router: Router) { 
    this.videoService.Message.subscribe(MOS =>{
      let rounded = parseFloat(MOS).toFixed(2);
      this.Message =rounded;
    });
  } 

  private videoSubs: Subscription;

  videos: LowerResolution[] = [];

  ngOnInit(): void {
    this.videoSubs = this.videoService.getVSLRUpdateListner().subscribe((videos: LowerResolution[])=>{
      this.videos = videos;
    })
    const username = localStorage.getItem('theUser');
    document.getElementById('username-value').innerHTML = username;
  }
 
  navigateToHomepage() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['', username]);
  }  

  navigateToVideoStreaming(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['videoStreaming', username]);
  }

  navigateToUserProfile() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['usersinfo', username]);
  }

  calculate(event){
    event.preventDefault()
    const target = event.target
    const packetLoss = target.querySelector('#packetLoss').value
    const rebuffering = target.querySelector('#rebuffering').value
    const videoWidth = target.querySelector('#videoWidth').value
    const videoHeight = target.querySelector('#videoHeight').value
    const videoPLC = target.querySelector('#videoPLC').value
    const rebufferingLength = target.querySelector('#rebufferingLength').value
    const numRebufferingEvents = target.querySelector('#numRebufferingEvents').value
    const rebufferingFactor = target.querySelector('#rebufferingFactor').value
    const numVideos = target.querySelector('#numVideos').value
    const videoContentCoding = target.querySelector('#videoContentCoding').value
    const codingCompression = target.querySelector('#codingCompression').value
    const measureTime = target.querySelector('#measureTime').value
    const ipPacketLoss = target.querySelector('#ipPacketLoss').value
    const ipPacketLossRate = target.querySelector('#ipPacketLossRate').value
    const gopLength = target.querySelector('#gopLength').value
    const videoBitrate = target.querySelector('#videoBitrate').value
    const videoFrameRate = target.querySelector('#videoFrameRate').value
    this.videoService.addVSLRMdb(packetLoss, rebuffering, videoWidth, videoHeight, videoPLC, rebufferingLength, 
      numRebufferingEvents, rebufferingFactor, numVideos, videoContentCoding, codingCompression, measureTime, ipPacketLoss, 
      ipPacketLossRate, gopLength, videoBitrate, videoFrameRate)
  }

  ngOnDestroy(){
    this.videoSubs.unsubscribe();
  }

}

