import './App.css';
import {useContext,useEffect,useState} from 'react'
import React from'react'
import {Context} from './Components/Data/Index'

//components
import Data from './Components/Data/Index'
import FilmName from './Components/FilmName';
function App() {

  return (
    <Context.Provider>
      <>
      
      <div className="App">
       <Data/>
        <FilmName value ='ddfafgh'/>
      </div>
    </>
    </Context.Provider>
    

  );
}

export default App;
