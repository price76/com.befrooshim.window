import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

import { GoodPanelComponent } from 'src/components/good/panel/good-panel.component';
import { StoreDetailComponent } from 'src/components/store/detail/store-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreHeaderComponent } from '../components/store/header/store-header.component';
import { StoreFooterComponent } from '../components/store/footer/store-footer.component';
import { BlogPanelComponent } from '../components/blog/panel/blog-panel.component';
import { BlogListComponent } from '../components/blog/list/blog-list.component';
import { BlogListItemComponent } from 'src/components/blog/list-item/blog-list-item.component';
import { GoodListComponent } from '../components/good/list/good-list.component';
import { GoodListItemComponent } from 'src/components/good/list-item/good-list-item.component';
import { GoodEmptyListComponent } from '../components/good/empty-list/good-empty-list.component';
import { BlogEmptyListComponent } from '../components/blog/empty-list/blog-empty-list.component';
import { ImageListItemComponent } from 'src/components/image/list-item/image-list-item.component';
import { ImageListComponent } from 'src/components/image/list/image-list.component';
import { ImagePanelComponent } from 'src/components/image/panel/image-panel.component';
import { GoodDetailComponent } from 'src/components/good/detail/good-detail.component';
import { BlogDetailComponent } from 'src/components/blog/detail/blog-detail.component';
import { CartDetailComponent } from '../components/cart/detail/cart-detail.component';
import { CartAddToButtonComponent } from '../components/cart/add-to-button/cart-add-to-button.component';
import { CartCheckoutComponent } from '../components/cart/checkout/cart-checkout.component';
import { MobileNumberInputComponent } from '../components/customer/mobile-number-input/mobile-number-input.component';
import { AddressInputComponent } from '../components/customer/address-input/address-input.component';
import { ConfirmCodeInputComponent } from '../components/customer/confirm-code-input/confirm-code-input.component';
import { ValidationResultComponent } from 'src/components/customer/validation-result/validation-result.component';
import { CartBannerComponent } from 'src/components/cart/banner/cart-banner.component';
import { CartPanelComponent } from '../components/cart/panel/cart-panel.component';
import { CartListComponent } from '../components/cart/list/cart-list.component';
import { CartListItemComponent } from '../components/cart/list-item/cart-list-item.component';
import { GoodHomeComponent } from '../components/good/home/good-home.component';
import { StoreNavigationBarComponent } from '../components/store/navigation-bar/store-navigation-bar.component';
import { StoreContactComponent } from '../components/store/contact/store-contact.component';
import { BlogHomeComponent } from 'src/components/blog/home/blog-home.component';
import { TagPanelComponent } from '../components/tag/panel/tag-panel.component';
import { TagListComponent } from '../components/tag/list/tag-list.component';
import { TagListItemComponent } from '../components/tag/list-item/tag-list-item.component';
import { CategoryPanelComponent } from '../components/category/panel/category-panel.component';
import { CategoryListComponent } from '../components/category/list/category-list.component';
import { CategoryListItemComponent } from '../components/category/list-item/category-list-item.component';
import { CategoryLabelComponent } from '../components/category/label/category-label.component';
import { PriceLabelComponent } from '../components/good/price-label/price-label.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';






@NgModule({
  declarations: [
    AppComponent,
    StoreDetailComponent,
    GoodPanelComponent,
    HomeComponent,
    StoreHeaderComponent,
    StoreFooterComponent,
    BlogPanelComponent,
    BlogListComponent,
    BlogListItemComponent,
    GoodListComponent,
    GoodListItemComponent,
    GoodEmptyListComponent,
    BlogEmptyListComponent,
    ImagePanelComponent,
    ImageListComponent,
    ImageListItemComponent,
    GoodDetailComponent,
    BlogDetailComponent,
    CartDetailComponent,
    CartAddToButtonComponent,
    CartCheckoutComponent,
    MobileNumberInputComponent,
    AddressInputComponent,
    ConfirmCodeInputComponent,
    ValidationResultComponent,
    CartBannerComponent,
    CartPanelComponent,
    CartListComponent,
    CartListItemComponent,
    GoodHomeComponent,
    StoreNavigationBarComponent,
    StoreContactComponent,
    BlogHomeComponent,
    TagPanelComponent,
    TagListComponent,
    TagListItemComponent,
    CategoryPanelComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    CategoryLabelComponent,
    PriceLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
