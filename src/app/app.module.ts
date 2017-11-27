import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FunctionsService } from './functions.service';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpassComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
     RouterModule.forRoot([
      {
      path:'',
      component:LoginComponent
      },
      {
      path:'login',
      component:LoginComponent
      },
      {
      path:'register',
      component:RegisterComponent
      },
      {
      path:'forgotpass',
      component:ForgotpassComponent
      },
      {
      path:'dashboard',
      component:DashboardComponent
      },

      ])
   ],
  providers: [FunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
 public  showHeaderFooter;
 constructor(private functions: FunctionsService) {

    this.functions.setAuthToken();
 this.showHeaderFooter=this.functions.showHeaderFooter;

     this.functions.loadStyleJs('assets/css/vendor/bootstrap.min.css','css');
     this.functions.loadStyleJs('assets/css/vendor/animate.css','css');
     this.functions.loadStyleJs('assets/js/vendor/animsition/css/animsition.min.css','css');
     this.functions.loadStyleJs('assets/css/vendor/font-awesome.min.css','css');
     this.functions.loadStyleJs('assets/js/vendor/daterangepicker/daterangepicker-bs3.css','css');
     this.functions.loadStyleJs('assets/js/vendor/morris/morris.css','css');
     this.functions.loadStyleJs('assets/js/vendor/owl-carousel/owl.carousel.css','css');
     this.functions.loadStyleJs('assets/js/vendor/owl-carousel/owl.theme.css','css');
     this.functions.loadStyleJs('assets/js/vendor/rickshaw/rickshaw.min.css','css');
     this.functions.loadStyleJs('assets/js/vendor/datetimepicker/css/bootstrap-datetimepicker.min.css','css');
     this.functions.loadStyleJs('assets/js/vendor/datatables/css/jquery.dataTables.min.css','css');
     this.functions.loadStyleJs('assets/js/vendor/datatables/datatables.bootstrap.min.css','css');
     this.functions.loadStyleJs('assets/js/vendor/summernote/summernote.css','css');
     this.functions.loadStyleJs('assets/css/main.css','css');





       var dynamicScripts = ["assets/js/vendor/jquery/jquery-1.11.2.min.js","assets/js/vendor/modernizr/modernizr-2.8.3-respond-1.4.2.min.js","assets/js/vendor/bootstrap/bootstrap.min.js","assets/js/vendor/jRespond/jRespond.min.js",'assets/js/vendor/d3/d3.min.js','assets/js/vendor/d3/d3.layout.min.js','assets/js/vendor/rickshaw/rickshaw.min.js','assets/js/vendor/sparkline/jquery.sparkline.min.js','assets/js/vendor/slimscroll/jquery.slimscroll.min.js','assets/js/vendor/animsition/js/jquery.animsition.min.js','assets/js/vendor/daterangepicker/moment.min.js','assets/js/vendor/daterangepicker/daterangepicker.js','assets/js/vendor/screenfull/screenfull.min.js','assets/js/vendor/flot/jquery.flot.min.js','assets/js/vendor/flot-tooltip/jquery.flot.tooltip.min.js','assets/js/vendor/flot-spline/jquery.flot.spline.min.js','assets/js/vendor/easypiechart/jquery.easypiechart.min.js','assets/js/vendor/raphael/raphael-min.js','assets/js/vendor/morris/morris.min.js','assets/js/vendor/owl-carousel/owl.carousel.min.js','assets/js/vendor/datetimepicker/js/bootstrap-datetimepicker.min.js','assets/js/vendor/datatables/js/jquery.dataTables.min.js','assets/js/vendor/datatables/extensions/dataTables.bootstrap.js','assets/js/vendor/chosen/chosen.jquery.min.js','assets/js/vendor/summernote/summernote.min.js','assets/js/vendor/coolclock/coolclock.js','assets/js/vendor/coolclock/excanvas.js','assets/js/main.js'];
     
       this.functions.loadScript(dynamicScripts);



 }


}
