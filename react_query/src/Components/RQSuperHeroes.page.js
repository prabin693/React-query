import React from 'react'
import { useSuperHeroesData } from './hooks/useSuperHeroesData'
import { Link } from "react-router-dom";
export const RQSuperHeroesPage = () => {

    const onSuccess =(data) =>{
        console.log('perform side effect when success occurs')
    }

    const onError =(error) =>{
        console.log('perform side effect when error occurs')
    }
    
    const {isLoading, data ,isError, error, isFetching, refetch} = useSuperHeroesData(onSuccess,onError) 
  
    console.log({isLoading,isFetching})


    if (isLoading || isFetching){
        return <div>Loading...</div>
    }

    if (isError){
        return <div>{error.message}</div>
    }


    return (
        <>
         <h2>Super Heroes Page RQS</h2>
         <button onClick={refetch}>Refetch</button>
         {
                data?.data.map((hero) =>{ 
                    return (
                        <div key={hero.id}>
                          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>  
                        </div>
                    )
                })
         }
        </>
    )
}

