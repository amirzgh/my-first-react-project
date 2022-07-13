import {useState} from "react";
const useSearch = (callback) => {
    const [inputs,setInputs] = useState({});
    const handleSubmit= (event) =>{
        if (event) {
            event.preventDefault();
        }
        callback();
    }
    const handleInputChanges = (event) =>{
        event.persist();
        setInputs(inputs => ({...inputs,[event.target.name] : event.target.value}))
    }
    return {
        handleSubmit,
        handleInputChanges,
        inputs
    };
}
 
export default useSearch;