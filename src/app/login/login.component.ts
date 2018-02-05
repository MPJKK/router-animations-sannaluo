import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user = new User('', '');

  constructor(private mediaService: MediaService, private router: Router) {
  }

  login() {
    this.mediaService.login(this.user);
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    console.log(this.mediaService.getUserData(token));

    if (token !== null) {
      this.mediaService.getUserData(token).subscribe(response => {
        console.log(response);
        this.router.navigate(['front']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }
  }

}
