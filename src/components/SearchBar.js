import React,{useState} from 'react'
import CocktailList from './CocktailList';

function SearchBar() {
    const[search,setSearch]=useState("");
    const[Mycocktail,setCocktail]=useState();
    const searchCocktail=(evt)=>{
        if(evt.key==="Enter")
        {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)//fetching the data from the api
            .then(res=>res.json())
            .then(data=> {setCocktail(data.drinks);
                setSearch("")})
        }
    }
  return (
    <>
      <div className="heading">
       <h1>Search Your Cocktail Recipe</h1>
       <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4>
      </div>
      <div className="searchBox">
        <input
          type="search"
          className="search-bar"
          placeholder='Search your  favourite cocktail'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyPress={searchCocktail}
        />
      </div>
      <div className="container">
       {Mycocktail == null ? (
         <p className="notSearch">No Cocktails Matched your search!</p>
        ) : (
           Mycocktail.map((res) => {
            <li> key={res.idDrink}</li>
             return <CocktailList data={res} />;
           })
        )}
      </div>
     </>
  );
 }
 
 export default SearchBar