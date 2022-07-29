import React,{useState} from 'react'
import CocktailList from './CocktailList';

function SearchBar() {
    const[search,setSearch]=useState("");
    const[Mycocktail,setCocktail]=useState();
    const searchCocktail=(evt)=>{
        if(evt.key=="Enter")
        {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)//fetching the data from the api
            .then(res=>res.json())
            .then(data=> {setCocktail(data.drinks);
                setSearch("")})
        }
    }
  }
  
  return (
    <>
      <div className="searchBox">
        <input
          type="search"
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyPress={searchCocktail}
        />
      </div>
//       <div className="container">
//         {Mycocktail == null ? (
//           <p className="notSearch">Not found</p>
//         ) : (
//           Mycocktail.map((res) => {
//            <li> key={res.idDrink}</li>
//             return <CocktailList data={res} />;
//           })
//         )}
//       </div>
//     </>
//   );
// }

// export default SearchBar