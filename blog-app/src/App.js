import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData] = useState('');
  return (
    <div className="App">
      {/* <p>Learning Unit testing by react testing library Jest</p>
      <p>JEST.JS</p>
      <img src="" title='hello jest' />
      <input type='text' name="username" placeholder='Enter UserName .... ' onChange={(e)=>setData(e.target.value)}/> */}

      <button onClick={()=>setData('Updated Data')}>Update Data</button>
      <p>{data}</p>
    </div>
  );
}

export default App;
