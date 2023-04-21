import React,{useEffect,useState} from 'react'
import { SwiggyRestaurant_API_URL } from '../../components/Contants';

const useSwiggy = () => {

    // const [FilteredRestaurant,setFilteredRestaurant] = useState([]);
    const [AllRestaurant,setAllRestaurant] = useState([]);

    useEffect(()=>{
        console.log("USE EFFECT")
        //API call
        getRestaurant()
            },[])
        
            async function getRestaurant(){
                const data =await fetch(SwiggyRestaurant_API_URL)
                const json = await data?.json();
                console.log(json?.data)
                // console.log(json)
                setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
                // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
            }
            return AllRestaurant
            // return FilteredRestaurant;
}

export default useSwiggy