import '../App.css';
function ResetInput(){
    function resetInput(e){
        e.preventDefault();
    }
    return(
       
            <button onClick={resetInput}>Reset Input</button>
       
    )

}export default ResetInput;