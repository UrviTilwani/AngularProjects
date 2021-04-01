import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './modules/about-us/about-us/about-us.component';
import { BlogEntriesComponent } from './modules/blog-entries/blog-entries/blog-entries.component';
import { ContactUsComponent } from './modules/contact-us/contact-us/contact-us.component';
import { HomeComponent } from './modules/home/home/home.component';
import { PostDetailsComponent } from './modules/post-details/post-details/post-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "blog-entries", component: BlogEntriesComponent },
  { path: "post-details", component: PostDetailsComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
