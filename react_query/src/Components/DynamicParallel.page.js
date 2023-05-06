import { useQueries } from "react-query"
import axios from "axios"



const fetchSuperHeroes = (heroId) =>{
    return axios.get(`http://localhost:3001/superheroes/${heroId}`)
}


export const DynamicParallelPage = ({heroId}) => {
      const queryResult=useQueries(
        heroId.map(id=> {
        return {
            queryKey: ["super-heroes",id,],
            queryFn:() => fetchSuperHeroes(id)
        }
        })
      )
    console.log(queryResult)
    return <div>DynamicParallelPage</div>

}