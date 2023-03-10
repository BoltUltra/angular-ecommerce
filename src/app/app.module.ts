import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// Third-party modules
import { NgxPaginationModule } from 'ngx-pagination';
import { SwiperModule } from 'swiper/angular';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { SliderContentComponent } from './slider-content/slider-content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { DataTablesModule } from 'angular-datatables';
import { DashboardProductsComponent } from './dashboard-products/dashboard-products.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    SliderComponent,
    ProductsComponent,
    SliderContentComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TopnavComponent,
    SidebarComponent,
    AddProductComponent,
    BottomNavComponent,
    DashboardProductsComponent,
    ForgetPasswordComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
