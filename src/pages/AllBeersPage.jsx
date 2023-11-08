
import React from "react"
import axios from "axios"


/*useful for usaage of React Features */
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const API_URL = "https://ih-beers-api2.herokuapp.com/beers"


function AllBeersPage() {

    const [beers,setBeers] = useState([''])



    /*UseEffect with an empty array will create side efects when the component is rendered initially */

useEffect (()=>{
axios.get(`${API_URL}/`).then((response)=>{
setBeers(response.data)
})
.catch((error)=>console.log(error))
},[])

    return (
        <div>

            {beers.map((beer)=>{
                return(

                <div key={beer.id}>{/*não esquecer de por isto(key) depois do map. não esquecer de fazer return !*/}
                    <Link to = {`/beers/${beer.id}`}> 
                    <img src={beer.image_url} height={100}></img>

                    <h3>{beer.name}</h3>
                    <h2>{beer.tagline}</h2>
                    <h5>{beer.contributed_by}</h5>
            
                    </Link>
                </div>
                )
                
            })}

        </div>
    )
}

export default AllBeersPage;
