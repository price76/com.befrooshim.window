import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValidationResult } from 'src/model/validationResult';

@Component({
  selector: 'mobile-number-input',
  templateUrl: './mobile-number-input.component.html',
  styleUrls: ['./mobile-number-input.component.scss']
})
export class MobileNumberInputComponent implements OnInit {

  @Output() setMobileNumber = new EventEmitter<string>();

  inputMoblieNumber:string;
  validationResult: ValidationResult = this.isValidMobileNumber("");

  INVALID_LENGTH_MOBILE_NUMBER_MESSAGE : string= 'شماره موبایل،باید 11 رقم باشد';

  constructor() { }

	public typing(event: any){
		var eventValue: string = this.inputMoblieNumber;
		this.validationResult = this.isValidMobileNumber(eventValue);

		if(this.validationResult.isValid== true){
			this.setMobileNumber.emit(eventValue)
		}else{
			this.setMobileNumber.emit(undefined);
		}
	}


	private isValidMobileNumber(zeroBasedValue: string): ValidationResult{
		var validationResult: ValidationResult = {
			isValid :false,
			errorMessageList: [],
		}
		if(zeroBasedValue == undefined || zeroBasedValue.length != 11){
			validationResult.isValid = false;
			validationResult.errorMessageList.push(this.INVALID_LENGTH_MOBILE_NUMBER_MESSAGE);
		}else{
			validationResult.isValid = true;
		}

		return validationResult
	}



	ngOnInit(): void {
	}

}
