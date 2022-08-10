import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from 'src/components/blog/detail/blog-detail.component';
import { BlogHomeComponent } from 'src/components/blog/home/blog-home.component';
import { CartCheckoutComponent } from 'src/components/cart/checkout/cart-checkout.component';
import { GoodDetailComponent } from 'src/components/good/detail/good-detail.component';
import { GoodHomeComponent } from 'src/components/good/home/good-home.component';
import { StoreContactComponent } from 'src/components/store/contact/store-contact.component';
import { StoreDetailComponent } from 'src/components/store/detail/store-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path:'home',
		component: HomeComponent,
		data:{
			id: undefined
		},
		children:[
			{
				path:'',
				component: StoreDetailComponent,
				data:{
					id: undefined
				}
			},
			{
				path: 'blog', 
				component: BlogHomeComponent,
				children:[
					{
						path: 'detail', 
						component: BlogDetailComponent,
						data:{
							id: undefined
						},
					},
				]
			},
			{
				path: 'good', 
				component: GoodHomeComponent,
				children:[
					{
						path: 'detail', 
						component: GoodDetailComponent,
						data:{
							id: undefined
						},
					},
				]
			},
			{
				path: 'checkout', 
				component: CartCheckoutComponent,
			},

		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
