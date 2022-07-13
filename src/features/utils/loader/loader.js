import { useEffect } from 'react';
import './loader.css'
const Loader = () => {
    useEffect(()=>{
        // console.log("is loading");
    })
    return ( 
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
     );
}
 
export default Loader;