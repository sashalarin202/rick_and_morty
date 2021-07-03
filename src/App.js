import {React, useEffect, useState} from 'react';
import './App.css';
import  CherecterList  from './components/CherecterList/CherecterList';
// import { getAll } from './api/api'


function App() {

  const [list, setList] = useState('');

 useEffect(() => {
  fetch('https://rickandmortyapi.com/api/character')
    .then(res=>{
      return res.json();
    })
    .then(data => {
      console.log(data.results)
      setList(data.results)
    });

 }, []);


  return (
    <>
     {list && <CherecterList items={ list }/>}
    </>
  );
};

export default App;
