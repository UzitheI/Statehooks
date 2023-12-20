import React,{useState} from 'react'
import itemlist from './constants/constant'

export default function App(){
  const [index, setIndex]=useState(0);
  function handleEvent(){
    if(index <2){
      setIndex(index+1);
    }
    else{
      setIndex(0);
    }
  }
let item=itemlist[index]
  return(
    <div>
      <button onClick={handleEvent}>
        mybutton
      </button>
      <h1>{item.name}</h1>
      <img src={item.img} alt="" />
    </div>
  )
}