import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ValidationResult } from 'src/model/validationResult';

@Component({
	selector: 'address-input',
	templateUrl: './address-input.component.html',
	styleUrls: ['./address-input.component.scss']
})
export class AddressInputComponent implements OnInit {

	@Output() setAddress = new EventEmitter<string>();
	validationResult: ValidationResult;
	address:string;

	INVALID_LENGTH_ADDRESS_MESSAGE : string= 'آدرس میبایست شامل اسم استان و شهر و اطلاعات خیابان و کوچه و پلاک باشد.';

	constructor() { }

	ngOnInit(): void {
	}

	public typing(event: any){
		var addressValue: string = this.address.toString().trim();
		this.validationResult = this.isValidAddress(addressValue);
		if(this.validationResult.isValid== true){
			this.setAddress.emit(addressValue)
		}else{
			this.setAddress.emit(undefined);
		}
	}

	private isValidAddress(address: string): ValidationResult{
		var validationResult: ValidationResult = {
			isValid :false,
			errorMessageList: [],
		}
		if(
			address == undefined ||
			address.length < 10
		){
			validationResult.isValid = false;
			validationResult.errorMessageList.push(this.INVALID_LENGTH_ADDRESS_MESSAGE);
		}else{
			validationResult.isValid = true;
		}

		return validationResult
	}

}
