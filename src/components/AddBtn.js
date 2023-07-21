import '../App.css';
import { useRef,useState } from 'react';
function AddBtn(){
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
    function add(e){
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value)); 

    }

    return(
       
            <button onClick={add}>+</button>
       
    )
}export default AddBtn;