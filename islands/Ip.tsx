import { getNetworkAddr } from 'https://deno.land/x/local_ip/mod.ts';

let  netAddr: string  | undefined 
function get() { 
  getNetworkAddr().then((data) => { 
    netAddr = data
    alert(netAddr)
  })
}
export default function Ip(props: any) { 
  

  return (
    
    
      
    <div>
        
        <button onClick={() => { 
        getNetworkAddr().then((data) => { 
           alert("hi")
        })
          alert("hi") 
      }
        }>get ip</button>
    </div>
    
  )

}
