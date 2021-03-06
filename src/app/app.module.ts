import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

// Importing the components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SportsComponent } from './sports/sports.component';
import { UsersComponent } from './users/users.component';
import { SessionsComponent } from './sessions/sessions.component';
import { PaymentsComponent } from './payments/payments.component';
import { CmsComponent } from './cms/cms.component';
import { GamificationComponent } from './gamification/gamification.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingsComponent } from './settings/settings.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FusionChartsModule } from 'angular-fusioncharts';
// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-spinner';


// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { UserDetailsComponent } from './user-details/user-details.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { BusinessComponent } from './business/business.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { GamificationDetailComponent } from './gamification-detail/gamification-detail.component';

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
//FusionChartsModule.fcRoot(FusionCharts, Charts)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSnackBarModule} from '@angular/material/snack-bar'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Service } from './service';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {PageService} from './page.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from './token-interceptor.service';
import { PaginationComponent } from './pagination/pagination.component'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    SportsComponent,
    UsersComponent,
    SessionsComponent,
    PaymentsComponent,
    CmsComponent,
    GamificationComponent,
    NotificationComponent,
    SettingsComponent,
    BreadcrumbComponent,
    UserDetailsComponent,
    SessionDetailsComponent,
    BusinessComponent,
    BusinessDetailComponent,
    PaymentDetailComponent,
    GamificationDetailComponent,
    LoginComponent,
    AdminComponent,
    PaginationComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatSnackBarModule,

    FusionChartsModule,
    NgbModule,
    NgbPaginationModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [Service,PageService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
