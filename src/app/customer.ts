export class customer {
	//Data Field Declaration

	phoneNo: number;
	passWord: any;
	custName: any;
	age: number;
	gender: any;
	emailId: any;
	accountStatus: any;


	// staticRequestId:any;
	// requestId:any;
	//Constructor using all field

	constructor(phoneNo, passWord, custName, age, gender,emailId,accountStatus) {
		this.phoneNo = phoneNo;
		this.passWord = passWord;
		this.custName = custName;
		this.age = age;
		this.gender = gender;
		this.emailId = emailId;
		this.accountStatus=accountStatus;
	}
}