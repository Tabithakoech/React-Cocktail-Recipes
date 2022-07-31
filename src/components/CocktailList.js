import React from 'react'
// import LinesEllipsis from "react-lines-ellipsis";
import '../App.css';

function CocktailList(getCocktail) {
    console.log(getCocktail.data)

      return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <img src={getCocktail.data.strDrinkThumb} alt="meal" />
                    <div className="info">
                        <h2>{getCocktail.data.strDrink}</h2>
                        <p>{getCocktail.data.strCategory} ::<span>{getCocktail.data.strAlcoholic}</span></p>
                        <p>{getCocktail.data.strGlass}</p>
                        {/* <p>{getCocktail.data.strTags}</p> */}

                    </div>
                    <div className="recipe">
                        <h2>Recipe</h2>
                        <p>{getCocktail.data.strInstructions} </p>
                        {/* <LinesEllipsis
                           text={getCocktail.data.strInstructions}
                           maxLine="3"
                           ellipsis="..."
                           trimRight
                           basedOn="letters"
                       /> */}
                    </div>
                </div>
                
            </div>
        </>
 )
}
export default CocktailList