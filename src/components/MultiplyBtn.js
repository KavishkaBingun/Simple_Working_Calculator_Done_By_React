import '../App.css';
function MultiplyBtn(){
    function multiply(e){
        e.preventDefault();

    }
    return(
       
            <button onClick={multiply}>*</button>
      
    )
}export default MultiplyBtn;