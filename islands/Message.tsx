import { tw } from "../comm/twilio.ts";
import { signal} from "@preact/signals";


interface Person { 
     text: string

}
const data =signal("hhhhhhhh")
  // alert("from server")
  // console.log("server")
  // tw.send()
async function send(){
  const jsonResponse = await fetch("https://api.github.com/users/denoland");
  const jsonData = await jsonResponse.json();
  data.value = JSON.stringify(jsonData)
  
  //alert(data);

}

let name = "wqh"

const send1 = () => { 
  tw.send()
}

export default function Message(props: Person) { 
  

  return (
    
    <>
      
    <div>
    <div>
      {data}
      </div>
        <button onClick={() => { 
         data.value = "hihihihihihi"
        send1()
        //  send()
         alert(data)

      }
        }>send message</button>
      </div>
     
      <div>
      {name}
      </div> 
    
   </>
      )

}
