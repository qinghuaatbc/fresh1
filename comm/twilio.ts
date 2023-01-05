import { Twilio } from "https://deno.land/x/twilio/Twilio.ts";



// const accountSid = 'AC0d271a4d0c2864e6d9c29ee08d84f41d'; // Your Account SID from www.twilio.com/console
// const authToken = '33545e0f43fed2fbf16df50df20ead96'; // Your Auth Token from www.twilio.com/console
// const  serviceId ='MGad4f817e7c81f12968687eb3266335d2'


// const twilio = new Twilio(
//     accountSid,
//     authToken,
//     serviceId,
//     '+16048006902',
// );

class Tw { 
   accountSid = 'AC0d271a4d0c2864e6d9c29ee08d84f41d'; // Your Account SID from www.twilio.com/console
  authToken = '33545e0f43fed2fbf16df50df20ead96'; // Your Auth Token from www.twilio.com/console
   serviceId ='MGad4f817e7c81f12968687eb3266335d2'
  
  tw: any
  
  constructor() { 
    this.tw =  new Twilio(
      this.accountSid,
      this.authToken,
      this.serviceId,
      '+16048006902',
  );
  

  }

  send(called:string,message:string) { 
    this.tw.sendMessage(called, message);
  }


}

export const tw = new Tw()