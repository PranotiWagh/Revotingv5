import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home=()=>{
    let navigator = useNavigate()

    let loginPage =()=>{
        navigator("./login")
    }
    
    return(
        <div>
            <h2>Home</h2>
            <button onClick={loginPage}>Click here to go to login page</button>
        </div>
    )
}
export default Home