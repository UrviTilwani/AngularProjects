import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/core/components/header/header.component';
import { FooterComponent } from './modules/core/components/footer/footer.component';
import { CarouselComponent } from './modules/home/components/carousel/carousel.component';
import { CarouselItemComponent } from './modules/home/components/carousel/component/carousel-item/carousel-item.component';
import { TemplateBannerComponent } from './modules/shared/components/template-banner/template-banner.component';
import { BlogPostComponent } from './modules/shared/components/blog-post/blog-post.component';
import { PostSearchComponent } from './modules/shared/components/post-search/post-search.component';
import { RecentPostComponent } from './modules/shared/components/recent-post/recent-post.component';
import { CatagoriesComponent } from './modules/shared/components/catagories/catagories.component';
import { TagCloudsComponent } from './modules/shared/components/tag-clouds/tag-clouds.component';
import { ModuleBannerComponent } from './modules/shared/components/module-banner/module-banner.component';
import { AboutUsDetailsComponent } from './modules/about-us/components/about-us-details/about-us-details.component';
import { AboutUsRowcontentComponent } from './modules/about-us/components/about-us-rowcontent/about-us-rowcontent.component';
import { AboutUsComponent } from './modules/about-us/about-us/about-us.component';
import { HomeComponent } from './modules/home/home/home.component';
import { BlogEntriesComponent } from './modules/blog-entries/blog-entries/blog-entries.component';
import { PostDetailsComponent } from './modules/post-details/post-details/post-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { ContactUsComponent } from './modules/contact-us/contact-us/contact-us.component';
import { SendUsMessageComponent } from './modules/contact-us/components/send-us-message/send-us-message.component';
import { ContactInfoComponent } from './modules/contact-us/components/contact-info/contact-info.component';
import { AddressMapComponent } from './modules/contact-us/components/address-map/address-map.component';
import { BlogEntriesPostComponent } from './modules/blog-entries/components/blog-entries-post/blog-entries-post.component';
import { CommentsComponent } from './modules/post-details/components/comments/comments.component';
import { CommentComponent } from './modules/post-details/components/comment/comment.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CarouselItemComponent,
    TemplateBannerComponent,
    BlogPostComponent,
    PostSearchComponent,
    RecentPostComponent,
    CatagoriesComponent,
    TagCloudsComponent,
    ModuleBannerComponent,
    AboutUsDetailsComponent,
    AboutUsRowcontentComponent,
    AboutUsComponent,
    HomeComponent,
    BlogEntriesComponent,
    PostDetailsComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    SendUsMessageComponent,
    ContactInfoComponent,
    AddressMapComponent,
    BlogEntriesPostComponent,
    CommentsComponent,
    CommentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
