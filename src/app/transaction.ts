export class transaction {
    //Data Field Declaration
    transactionId:any;
    phnNumber: any;
    amtTransfer:any;
    balance:any;
    date:any;
    amtReceived:any;
    senderPhnNumber:any;
    receiverPhnNumber:any;
    
    constructor(transactionId, phnNumber, amtTransfer,  balance,  date,  amtReceived,
        senderPhnNumber, receiverPhnNumber) 
    {
        this.transactionId=transactionId;
        this.phnNumber = phnNumber;
        this.amtTransfer=amtTransfer;
        this.balance=balance;
        this.date=date;
        this.amtReceived=amtReceived;
        this.senderPhnNumber=senderPhnNumber;
        this.receiverPhnNumber=receiverPhnNumber;
        
    }
}