import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FunctionsService } from './functions.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
               './app.component.css',
              
             ]
})


export class AppComponent {
  title = 'app';
    public  showHeaderFooter;
    constructor(private router:Router,private route: ActivatedRoute,private http: HttpClient,private functions: FunctionsService) { 

       this.showHeaderFooter=this.functions.showHeaderFooter;

    }

  ngOnInit() {


  }



}
