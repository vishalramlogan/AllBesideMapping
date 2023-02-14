import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{

  Response: Array<any>;

  constructor(public usersService: UsersService, private router: Router) { 
    this.usersService.Response.subscribe(mappings =>{
      this.Response = mappings;
    });
  }  

  ngOnInit(): void {
    const username = localStorage.getItem('theUser');
    const usernameAdmin = localStorage.getItem('theUserAdmin');
    if (username == 'Administrator'){
      this.usersService.getUserInfoAdmin(usernameAdmin);
      document.getElementById('username-value').innerHTML = usernameAdmin;
    }else{
      this.usersService.getUserInfo();
      document.getElementById('username-value').innerHTML = username;
    }
  }

  navigateToHomepage() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['', username]);
  }

  ngOnDestroy(){
  }

}
