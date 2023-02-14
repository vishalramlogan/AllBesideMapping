import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-str-hp',
  templateUrl: './video-str-hp.component.html',
  styleUrls: ['./video-str-hp.component.scss']
})
export class VideoStrHPComponent {
  constructor(private router: Router) { 
  } 

  navigateToHomepage() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['', username]);
  }

  navigateToUserProfile() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['usersinfo', username]);
  }

  navigateToHigherResolution(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'videoStreamingHigherResolution']);
  }

  navigateToLowerResolution(){
    const username = localStorage.getItem('theUser');
    this.router.navigate(['/users', username,'videoStreamingLowerResolution']);
  }

}
