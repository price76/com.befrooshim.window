import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/model/storeModel';

@Component({
	selector: 'store-contact',
	templateUrl: './store-contact.component.html',
	styleUrls: ['./store-contact.component.scss']
})
export class StoreContactComponent implements OnInit {

	@Input() store:Store;
	whatsappLink: string;
	mobileNumberLink: string;
	smsLink: string;
	instagramLink: string;
	telegramUserLink: string;
	telegramChannelLink : string;
	phoneNumberLink: string;
	

	constructor() { }

	ngOnInit(): void {
		if(this.store.mobileNumber){
			this.whatsappLink = `https://wa.me/${this.store.mobileNumber}/?text=%D8%B3%D9%84%D8%A7%D9%85.%D9%85%DB%8C%D8%AE%D9%88%D8%A7%D8%B3%D8%AA%D9%85%20%D8%A8%D8%AF%D9%88%D9%86%D9%85%20...`;
			this.mobileNumberLink = `tel:${this.store.mobileNumber}`
			this.smsLink = `sms://${this.store.mobileNumber}?body=سلام.میخواستم بدونم ...`
		}
		if(this.store.instagram){
			this.instagramLink = `https://instagram.com/${this.store.instagram}`
		}

		if(this.store.channelId){
			this.telegramChannelLink = `https://t.me/${this.store.channelId}`
		}
		if(this.store.adminUser.telegramUsername){
			this.telegramUserLink = `https://t.me/${this.store.adminUser.telegramUsername}`
		}

		if(this.store.phoneNumber){
			this.phoneNumberLink = `tel:${this.store.phoneNumber}`
		}


	}

}
