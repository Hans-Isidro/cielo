import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { IosComponent } from './pages/ios/ios.component';
import { AndroidComponent } from './pages/android/android.component';
import { WindowsComponent } from './pages/windows/windows.component';
import { FeacturesComponent } from './pages/feactures/feactures.component';

const app_routes: Routes = [
    {   path: 'home', component: PortafolioComponent},
    {   path: 'about', component: AboutComponent},
    {   path: 'ios', component: IosComponent},
    {   path: 'android', component: AndroidComponent},
    {   path: 'windows', component: WindowsComponent},
    {   path: 'feactures', component: FeacturesComponent},
    {   path: '**', pathMatch: 'full', redirectTo: 'home'}
];
@NgModule({
    imports: [ RouterModule.forRoot( app_routes, {useHash: true})],
    exports: [ RouterModule]
})

export class AppRoutingModule {}