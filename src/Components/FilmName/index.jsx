import React, { useContext } from 'react'
import Contex from './Components/Data/Index'

function FilmName(props) {
    const value = useContext(Context)
    value.map((value,index)=>{
        value.map((value,index) =>{
            console.log(value.title)
        })
    })
  return (
    
    <h1>{props.value}</h1>
  )
}

export default FilmName
