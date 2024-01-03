import {react, useState, useEffect } from 'react';

const ImageURL =()=>{
  const [imageUrl, setImageUrl]=useState(null);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    fetch("https://jsonplacehder.typicode.com/photos", {mode:"cors"})
    .then((response)=>{
      if(response.status >=400){
        throw new Error("server Error");
      }
    })
    .then((response)=>response.json())
    .then((response)=>setImageUrl(response[0].url)).catch((error)=>setError(error))
    .finally(()=>setLoading(false));
  },[]);

  return{imageUrl, error, loading};
};
  const Image=()=>{
    const{imageURL,error,loading}=useImageURL();
    if(error){
      return <p>A network error was encountered</p>
    }
    if(loading){
      return <p>loading</p>
    }

    return(
      <div>
      <h1>An image</h1>
      <img src={imageUrl} alt={"placeholder"} />
    </div>
  )
}


export default App;
