import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndamanComponent } from './andaman/andaman.component';
import { AndhrapradeshComponent } from './andhrapradesh/andhrapradesh.component';
import { HomeComponent } from './home/home.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { KeralaComponent } from './kerala/kerala.component';
import { LakshadweepComponent } from './lakshadweep/lakshadweep.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TamilnaduComponent } from './tamilnadu/tamilnadu.component';
import { TelanganaComponent } from './telangana/telangana.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"andhrapradesh",component:AndhrapradeshComponent},
  {path:"telangana",component:TelanganaComponent},
  {path:"karnataka",component:KarnatakaComponent},
  {path:"kerala",component:KeralaComponent},
  {path:"tamilnadu",component:TamilnaduComponent},
  {path:"andaman",component:AndamanComponent},
  {path:"lakshadweep",component:LakshadweepComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
