import '../App.css';
function AddBtn(){

    function add(e){
        e.preventDefault();
    }

    return(
       
            <button onClick={add}>+</button>
       
    )
}export default AddBtn;