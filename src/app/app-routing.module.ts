import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { OpinionsComponent } from './content/opinions/opinions.component';
import { MyworkComponent } from './content/mywork/mywork.component';
import { ContactComponent } from './content/contact/contact.component';
import { SkillsetComponent } from './content/skillset/skillset.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'opinions', component: OpinionsComponent },
    { path: 'mywork', component: MyworkComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'skillset', component: SkillsetComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})





export class AppRoutingModule {

}
