import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displayName:any;
  familyName:any;
  userId:any;
  email:any;
  imageUrl:any;
  loggedIn = false;

  constructor(public navCtrl: NavController,private googlePlus: GooglePlus) {

  }


login(){
  this.googlePlus.login({})
  .then(res => {
    console.log(res);
    this.displayName = res.displayName;
    this.email = res.email;
    this.familyName = res.familyName;
    this.imageUrl = res.imageUrl;
    this.userId = res.userId;
    this.loggedIn = true;

  })
  .catch(err => console.error(err));
}

logout(){
  this.googlePlus.logout().then(res=>{
    this.displayName = '';
    this.email = '';
    this.familyName = '';
    this.imageUrl = '';
    this.userId = '';
    this.loggedIn = false;
  }).catch(err => console.error(err));
}

}
