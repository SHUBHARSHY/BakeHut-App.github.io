import React, { useState,useEffect } from 'react'
import { SwiggyMenu_API_URL } from '../../components/Contants';

const UseRestaurant = (id) => {
    const [restaurant, setRestaurant]=useState(null);

    useEffect(() => {
        getRestaurantinfo();
      }, []);
    
      async function getRestaurantinfo() {
      
    
    
        const data = await fetch(SwiggyMenu_API_URL+id)
        const json = await data?.json();
        console.log(json.data.cards);
        // setRestaurant(json.data?.cards[0]?.card?.card?.info);
        setRestaurant(json?.data);
      }

      //return restaurant data

      return restaurant
  
}

export default UseRestaurant