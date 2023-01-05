import { Handlers } from "https://deno.land/x/fresh@1.1.2/server.ts";
import Ip from "../islands/Ip.tsx";
import Zone from "../islands/Zone.tsx";
//import Me from "../islands/Message.tsx";

// export const handler: Handlers = {
//   GET(_, ctx) { 
//      console.log("working")
//     return ctx.render()
//   }
// }

export default function test()
{ 
  return (
    <div>
    <div>
      <Ip></Ip>
    </div>
     <div>
       <Zone></Zone> 
      </div>

      
      </div>
  )
    
   

}

