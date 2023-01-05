import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "../comm/twilio.ts";
let videoUrls:string[]
interface Data {
  callee: string;
  message: string;
  videoUrl:string
}


export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const callee = url.searchParams.get("callee") || "";

    const message = url.searchParams.get("message") || "";
   tw.send(callee,message)
   // videoUrls.push("http://192.168.1.119:5080/LiveApp/streams/397584680641031668620119.mp4")
     const videoUrl = "http://24.80.168.30:5081/LiveApp/streams/790959164419468023195632.mp4"
    return ctx.render({ callee, message,videoUrl});
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { callee, message,videoUrl} = data;
  
  return (
    <div>
      <form>
      {/* <input type="text" name="c" value={callee} /> */}
        <select name="callee" id="c" value={ callee}>
           <option value="+16048033632">wang qinghua</option>
           <option value="+17789293632">zheng wenjia</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
       
        <textarea  name="message" value={message} ></textarea>
        <button type="submit">Send Meassage</button>
      </form>
     <video width="80%" height="80%" src={ videoUrl} controls/>
      <ul>
      </ul>
    </div>
  );
}