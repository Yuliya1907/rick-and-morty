import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import  Cards from './components/Cards/Cards.js';
import './App.css';

function App() {
  let [pageNumber, setPageNumber] = useState(2);
  let [fetchedData, updateFetchedDta] = useState([]);
  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  console.log(results);

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedDta(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <header className='header'><img src="images/header-icon.svg" alt="icon" /></header>
      <h1 className="text-center my-5 title">The Rick and Morty API</h1>
      <div className="container">
        <div className="row">
         <Cards results={results} />
        </div>
      </div>

    </div>
  );
}

export default App;
