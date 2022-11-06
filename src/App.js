import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

import Home from './Home';
function App() {
  const data = {name:"Subho", age:35}
  const [alldata, setAlldata] = useState(data)
 
  const changeAge = () =>{
    
    setAlldata( {...alldata, age:alldata.age+1})
  }
  return (
    <div className="App">
      <div className="app_arap">
        <h1>FROM APP</h1>
        <p>Name:{alldata.name}</p>
        <p>Name:{alldata.age}</p>
        <button onClick={changeAge} type="number"  >increse Age </button>
      </div>
      <Home  data={alldata} changeAge={changeAge} />
    </div>
  );
}

export default App;
