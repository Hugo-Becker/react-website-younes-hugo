import React,{useEffect,useState} from 'react'
import Recipes from '../components/composants/Recipes'
import '../css/Generic.css'
function Generic() {

    const APP_ID = "4fbb522c"
    const APP_KEY = "4efef29cfa909785946e98eb59dc1a3a"
    
    const [recipes, setRecipes] = useState([])
    const [value,setValue] =useState('')
    const [submitValue,setSubmitValue] = useState('')

    // useEffect( async ()=>{
    //     getRecipes()
       
    // },[])

    const getRecipes = async () =>{
        const response = await fetch(`https://api.edamam.com/search?q=${submitValue}&app_id=${APP_ID}&app_key=${APP_KEY}`)

        const data = await  response.json()
        console.log(data.hits)
        setRecipes(data.hits)
        
    }

    const updateSearch = e =>{
        setValue(e.target.value)
    }

    const submitConfirmed = (e) =>{
        e.preventDefault()
        setSubmitValue(value)
        getRecipes()
    }





    return (
        <div id="generic">
            <p>Veuillez introduire un mot-clé</p>
          
            <form className="search-form">
                <input className="search-bar" type="text" value={value} onChange={updateSearch} />
                <button className="search-button" type="submit" onClick={submitConfirmed}>GO</button>
            </form>

            <div className="flex">
            {recipes.map((recipe,i) => (
                <Recipes key={i} image={recipe.recipe.image} name={recipe.recipe.label} calorie={recipe.recipe.calories}></Recipes>))}

            </div>

            
            
        </div>
    )
}

export default Generic
