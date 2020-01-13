export class RoomBookingDetails {

    constructor(
        public bookingId: number,
        public bookingdatefrom:any,
        public bookingdateto:any,
        public id: number,
        public name: string,
        public userMail:string,
        public status:string,
        public location:string,
        public facility:string
    ) { }
}