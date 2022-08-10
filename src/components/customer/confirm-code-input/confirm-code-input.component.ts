import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ValidationResult } from 'src/model/validationResult';

@Component({
  selector: 'confirm-code-input',
  templateUrl: './confirm-code-input.component.html',
  styleUrls: ['./confirm-code-input.component.scss']
})
export class ConfirmCodeInputComponent implements OnInit {

	@Output() setConfirmationCode = new EventEmitter<string>();

	inputConfirmationCode:string ='';
	validationResult: ValidationResult;

	INVALID_LENGTH_CONFIRMATION_CODE_MESSAGE : string= 'کد تایید باید 5 رقم باشد.';

	constructor() { }

	public typing(event: any){
		var confirmationCodeValue: string = this.inputConfirmationCode;
		this.validationResult = this.isValidConfirmationCode(confirmationCodeValue);
		if(this.validationResult.isValid== true){
			this.setConfirmationCode.emit(confirmationCodeValue)
		}else{
			this.setConfirmationCode.emit(undefined);
		}
	}

	private isValidConfirmationCode(confirmationCode: string): ValidationResult{
		var validationResult: ValidationResult = {
			isValid :false,
			errorMessageList: [],
		}
		if(
			confirmationCode == undefined ||
			confirmationCode.length != 5
		){
			validationResult.isValid = false;
			validationResult.errorMessageList.push(this.INVALID_LENGTH_CONFIRMATION_CODE_MESSAGE);
		}else{
			validationResult.isValid = true;
		}

		return validationResult
	}

	ngOnInit(): void {
		this.validationResult = this.isValidConfirmationCode(this.inputConfirmationCode);
	}

}
