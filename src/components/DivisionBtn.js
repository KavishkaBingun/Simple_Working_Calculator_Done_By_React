import '../App.css';
function DivisionBtn(){
    function divide(e){
        e.preventDefault();
    }
    return(
   
            <button onClick={divide}>/</button>
      

    )
}export default DivisionBtn