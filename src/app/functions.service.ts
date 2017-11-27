import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class FunctionsService {
  public showHeaderFooter=true;
  public apiEndpoint='http://localhost/o-apps/';
  public headers=new HttpHeaders()
				        .set('Content-Type', 'application/json')
				        .set('x-auth-token', this.getAuthToken());

  constructor(private http: HttpClient) {
      this.showHeaderFooter=false;
  }

	public loadScript(dynamicScripts) {        
		    var isFound = false;
		    var scripts = document.getElementsByTagName("script")
		    for (var i = 0; i < scripts.length; ++i) {
		        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
		            isFound = true;
		        }
		    }

		    if (!isFound) {
		        
		        for (var i = 0; i < dynamicScripts .length; i++) {
		            let node = document.createElement('script');
		            node.src = dynamicScripts [i];
		            node.type = 'text/javascript';
		            node.async = false;
		            node.charset = 'utf-8';
		            document.getElementsByTagName('body')[0].appendChild(node);
		        }

		    }
		}


 loadStyleJs(filename, id) {
 var ss = document.styleSheets;
    for (var i = 0, max = ss.length; i < max; i++) {
        if (ss[i].href == filename)
            return;
    }
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = filename;

    document.getElementsByTagName("head")[0].appendChild(link);

 }		



	 ValidateEmail(mail)   
	{  
	 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
	  {  
	    return (true)  
	  }  
	    return (false)  
	}

    requiredField(inputtx)   
   {  console.log('inputtx'+inputtx)
     if (inputtx== 'undefined' || inputtx.length  < 1)  
      {   
         return false;   
      }       
    }


   setAuthToken() {
      this.http.get(this.apiEndpoint +'get-auth-token').subscribe(data => {
                   var res=JSON.parse(JSON.stringify(data))
        if(res.success){
           var tokenData=this.generateArray(res.data);
           window.localStorage.setItem('auth_token', tokenData[0].value);
        }
      });
   
   }
 getAuthToken(){

 console.log('localStorage',localStorage.getItem('auth_token'));
 return localStorage.getItem('auth_token');

 }
getHeader(){
	this.headers = new HttpHeaders()
				        .set('Content-Type', 'application/json')
				        .set('x-auth-token', this.getAuthToken());
}




        generateArray(obj){
		    return Object.keys(obj).map(function(k){return {key: k, value: obj[k]}})
		}




}
