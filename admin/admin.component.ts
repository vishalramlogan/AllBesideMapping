import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  Response: Array<any>;

  constructor(public usersService: UsersService, private router: Router) { 
    this.usersService.Response.subscribe(username =>{
      this.Response = username;
    });
  }  

  navigateToUserInfo(username: string): void {
    localStorage.setItem('theUserAdmin', username);
    this.router.navigate(['/usersinfo', username]);
  }

  ngOnInit(): void {
    const username = localStorage.getItem('theUser');
    this.usersService.getListUsers();
  }

  navigateToHomepage() {
    const username = localStorage.getItem('theUser');
    this.router.navigate(['', username]);
  }

  delete(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#delete').value

    this.usersService.deletedb(username)
  }

  ngOnDestroy(){
  }

}
