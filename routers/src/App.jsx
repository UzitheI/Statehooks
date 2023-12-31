import React from "react";
import {Link} from 'react-router-dom'

export default function App(){
  return(
    <div>
      <Link to="Profile">Profile page</Link>
      <p>Howdy Partner</p>
    </div>
  )
}