import React from 'react'

function Recipes(props) {
    return (
        <div className="recipe">
            <h1>{props.name}</h1>
    <p>{props.calorie}</p>
            <img src={props.image} alt=""/>
        </div>
    )
}

export default Recipes
