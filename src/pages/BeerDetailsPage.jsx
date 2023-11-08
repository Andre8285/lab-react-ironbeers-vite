

/* usefull for navigation*/
import { useParams, Link } from "react-router-dom"

/* usefull for  api comunication*/
import axios from "axios"

/* usefull for  using react features*/
import { useEffect } from "react"

import { useState } from "react"









const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetailsPage () {
    const [beer,setBeer] = useState ('')
    const {beerId} = useParams ()


    useEffect(()=>{
        axios.get(`${API_URL}/beers/${beerId}?_embed=tasks`).then((response)=>{

            const oneBeer = response.data;
            setBeer(oneBeer)
        
        })
        .catch((error)=>console.log(error))
    },[])






return (

    <div>
        {beer && (
            <div>
                <h1>{beer.name}</h1>
                <p>{beer.description}</p>
                
            </div>
        )}
        
     




    </div>

    )
}

export default BeerDetailsPage