import React ,{useState}from 'react'
// import LinesEllipsis from "react-lines-ellipsis";
import '../App.css';


function CocktailList(getCocktail) {


    console.log(getCocktail.data)
    const[isClicked,setIsClicked]=useState(false)


    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <img src={getCocktail.data.strDrinkThumb} alt="meal" />
                    <div className="info">
                        <h2>{getCocktail.data.strDrink}<span><button className='likee' isClicked={isClicked} onClick={()=>
                        setIsClicked(!isClicked)
                        }>❤️</button></span></h2>
                        <p>{getCocktail.data.strIngredient} food</p>
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