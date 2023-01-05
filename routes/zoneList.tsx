import { useState } from "preact/hooks";

const data1 = await fetch("https://customer-f29a1.firebaseio.com/customer.json")
const data2 = await data1.json()
const data3 = Object.values(data2)

export default function zoneList(): any { 

  const userLists = data3.map((user:any) => { 
    let i = 0
    const zoneLists = Object.values(user.alarm.zone).map((zone: any) => {
      // const [znumber, setZnumber] = useState(1)
      i++
      return (
       <div>
         
         <li>Zone-{i}--{zone}</li>
      </div>
      )
    })
   
      
    return (
      
      <div>
       <h3> <div>{ user.address.address}</div></h3>
        <ul>{ zoneLists}</ul>

       </div>
     )
    
  })

  return (
    <div>
    <h2>Zone List</h2>
      <div>
        <ul>{ userLists}</ul>
     </div>
     
    </div>

  )

}