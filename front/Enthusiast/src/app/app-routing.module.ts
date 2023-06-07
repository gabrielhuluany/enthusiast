import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/user/login/login.component";
import { AccountComponent } from "./components/user/account/account.component";
import { DataComponent } from './components/user/account/data/data.component';
import { PasswordComponent } from './components/user/account/password/password.component';
import { LogoutComponent } from './components/user/account/logout/logout.component';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "account", component: AccountComponent},
    {path: "account_data", component: DataComponent},
    {path: "account_password", component: PasswordComponent},
    {path: "account_logout", component: LogoutComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
