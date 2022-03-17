import React from 'react';
import RecipeItem from './RecipeItem';



const RecipeList = (props) => {
  return (<div>
    {/* Items should eventually be populated by checking a list on the database (?) */}
    SEA CHICKEN AND RICE
    PACIFIC CURRY RICE
    STEAK GRAVY BOAT
    KATSU
    <RecipeItem/>
  </div>)
}



export default RecipeList;