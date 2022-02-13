 import { Image } from "react-image-and-background-image-fade";

function Bg(props) {
 
    return (
    <div >
      <Image
       //src="https://www.qries.com/images/banner_logo.png"
         src={props.poster}

        // width={props.poster[1]}
         
        // width="100px"
        // height="100px"
        alt="flying cat"
        title="Neon cat"
      
      />
   
     </div>
    )}
export default Bg;
