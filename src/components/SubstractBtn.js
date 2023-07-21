import '../App.css';
function SubstractBtn(){
    function substract(e){
        e.preventDefault();
    }
    return(
        
            <button onClick={substract}>-</button>
      
    )

}export default SubstractBtn;