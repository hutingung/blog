import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BlogsComponent} from './blogs/blogs.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeadersComponent} from './shared/headers/headers.component';
import {FootersComponent} from './shared/footers/footers.component';
import {DemoMaterialModule} from './material-module';


const appRoutes: Routes = [
  {path: 'blogs', component: BlogsComponent},
  {path: '', redirectTo: '/blogs', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    PageNotFoundComponent,
    HeadersComponent,
    FootersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
