import React from 'react'
import axios from 'axios'
import {useState,useEffect,useContext} from 'react'


function Data() {
    const [film,setFilm] = useState()
    useEffect(()=> {
        axios.get(`https://ghibliapi.herokuapp.com/films`)
          .then(
            (rez) => {
              setFilm([rez.data]);
            }
          ).catch(err => console.log(err));
    },[])
    return(`${film}`)
    
}

export const Context = React.createContext(<Data/>);
export default Data
