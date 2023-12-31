import React from 'react'
import {Outlet } from 'react-router-dom';

export default function Profile(){
    return(
        <div>
            <p>This is the Profile SEction</p>
            <h2>The profile is visite d and:</h2>
            <Outlet/>
        </div>
    )
}