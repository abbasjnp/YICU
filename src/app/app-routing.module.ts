import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SportsComponent } from './sports/sports.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationComponent } from './notification/notification.component';
import { CmsComponent } from './cms/cms.component';
import { GamificationComponent } from './gamification/gamification.component';
import { PaymentsComponent } from './payments/payments.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { BusinessComponent } from './business/business.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { GamificationDetailComponent } from './gamification-detail/gamification-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: '', redirectTo:"/login",pathMatch:"full"  },
  { path: 'dashboard', component:DashboardComponent  },
  { path: 'sports', component:SportsComponent  },
  { path: 'sessions', component:SessionsComponent  },
  { path: 'payment', component:PaymentsComponent  },
  { path: 'gamification', component:GamificationComponent},
  { path: 'cms', component:CmsComponent},
  { path: 'notification', component:NotificationComponent},
  { path: 'settings', component:SettingsComponent  },
  { path: 'users', component:UsersComponent  },
  { path: 'business-detail', component:BusinessDetailComponent  },
  { path: 'business', component:BusinessComponent  },
  {path:'user-detail',component:UserDetailsComponent},
  {path:'session-details',component:SessionDetailsComponent},
  {path:'payment-details',component:PaymentDetailComponent},
  {path:'gamification-details', component:GamificationDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
