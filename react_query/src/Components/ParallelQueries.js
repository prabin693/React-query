
import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHero = () =>
{
    return axios.get(`http://localhost:3001/superheroes/`)
}

const fetchFriends = () =>
{
    return axios.get(`http://localhost:3001/friends/`)
}



export const ParallelQueries = () => {
     
   const{data:superheroes} = useQuery("superheroes",fetchSuperHero)
   const{data:friends} = useQuery("friends",fetchFriends)


  
  
    return <div>ParallelQueries</div>
  
}
