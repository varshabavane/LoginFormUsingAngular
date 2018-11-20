import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  
back(){
  this.router.navigate(['/home'])
}
}
