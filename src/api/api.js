import { useState, useEffect } from "react";

const useList = () => {
  // 1
  const [list, setList] = useState([]);

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
  
   return [list];
};

export default useList;
