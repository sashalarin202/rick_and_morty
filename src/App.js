import {React} from 'react';
import './App.css';
import  CherecterList  from './components/CherecterList/CherecterList';
import useList from './api/api'


function App() {

  const [list] = useList();

  return (
    <>
     {list && <CherecterList items={ list }/>}
    </>
  );
};

export default App;
