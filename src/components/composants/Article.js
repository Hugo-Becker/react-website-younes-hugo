import React from 'react'
// import Gtr from '../../img/gtr.jpg'



export const Article = (props) => {
    return (
        <div className='article'>

            <div className='divImg'>
                
                <img className='imgArticle' src={props.imgArticle} alt=""/>

            </div>
            <h1>{props.titreArticle}</h1>
            <p>{props.texteArticle}</p>
            <button>
                <a href="#">Learn More</a>
            </button>

            
        </div>
    )
}

export default Article
