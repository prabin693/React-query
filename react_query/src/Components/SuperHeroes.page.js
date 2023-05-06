 import {useState, useEffect} from 'react';
 import axios from 'axios';

 export const SuperHeroesPage = () => {

    const [isloading, setIsLoading] = useState(true)
    const[data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/superheroes').then((res) => {
            setData(res.data)
            setIsLoading(false)
        }).catch((error) => {

            setError(error.message)
            setIsLoading(false)
        })

    }, [])  
    if (isloading){
        return <div>Loading...</div>
    }

    if (error){
        return <div>{error}</div>
    }


return (
    <>
    <h2>Super Heroes Page</h2>
    {data.map((hero) =>{
        return (
            <div key={hero.id}>
                <h3>{hero.name}</h3>
            </div>
        )
    })}
    </>
        
    )
}



  