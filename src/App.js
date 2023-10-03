import './App.css';
import { useState,useEffect } from 'react';
import Addkeeper from './Components/Addkeeper/Addkeeper';
import Header from './Components/Header/Header';
import Showkeeper from './Components/Showkeeper/Showkeeper';
import axios from 'axios';

function App() {

  const [keeperList,setkeeperList] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/getAll')
    .then(res => setkeeperList(res.data));

  },[]);

  return (
    <>
    <div className='App'>
    <Header/>
    <Addkeeper keeperList={keeperList} setkeeperList={setkeeperList}/>
    <Showkeeper keeperList={keeperList} setkeeperList={setkeeperList}/>
    </div>
    </>
  
  );
}

export default App;
