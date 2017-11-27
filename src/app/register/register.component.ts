import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FunctionsService } from '../functions.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public addName;
  public addEmail;
  public addPassword;
  public addMessages='';
  public addSuccess=false;
  constructor(private router:Router,private route: ActivatedRoute,private Functions: FunctionsService ,private http: HttpClient) { 



   }
  


  addUser(e){

  return this.Functions.requiredField(this.addName);
  this.Functions.requiredField(this.addEmail);
  this.Functions.requiredField(this.addPassword);
  this.Functions.ValidateEmail(this.addEmail);
  if(
    (this.addName != 'undefined' && this.addPassword != 'undefined' && this.addEmail != 'undefined')
    &&
    (this.addName != '' && this.addPassword != '' && this.addEmail != '')
    )

  {
				     const req = this.http.post(
				               this.Functions.apiEndpoint+'add-user', { 
				                                                       name : this.addName,
                                                                       email:this.addEmail,
                                                                       password:this.addPassword ,
                                                                       role:1,
                                                                       status:1
				                                                      },
				                                        { headers: this.Functions.headers}
				      ).subscribe(
						        res => { 
						          var resArr=JSON.parse(JSON.stringify(res));
						          if(resArr.success){
						          
                                      this.addSuccess=resArr.success;
                                      this.addMessages=resArr.text;
                                        this.addName='';
										this.addEmail='';
										this.addPassword='';
						          }else{

						               this.addSuccess=false;
                                      this.addMessages=resArr.text;
						          }
						        },
						        err => {
						          console.log("Error occured");
						        }
				      );

				}{
					
				     this.addSuccess=false;
				    this.addMessages='all fields are required';

				}

  }




  ngOnInit() {
  }

}
