import './App.css';
import AddBtn from './components/AddBtn';
import DivisionBtn from './components/DivisionBtn';
import InputNumber from './components/InputNumber';
import MultiplyBtn from './components/MultiplyBtn';
import ResetResult from './components/ResetResult';
import SubstractBtn from './components/SubstractBtn';
import ResetInput from './components/ResetInput';


function App() {
  return (
    <div >
      <form className="App">
      <h1>Do your calculations here</h1>

<InputNumber/>
<div className='column'>
<AddBtn/>
<SubstractBtn/>
</div>
<div className='row'>
<MultiplyBtn/>
<DivisionBtn/>
</div>
<div id='reset'>
<ResetResult/>
<ResetInput/>

</div>


</form>
</div>
  );
}

export default App;
