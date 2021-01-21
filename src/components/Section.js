import React,{ useState } from 'react'
import Article from './composants/Article'

import Gtr from '../img/gtr.jpg'
import Apple from '../img/apple.jpeg'
import Cat from '../img/cat-icon.png'







export const Section = () => {

    const[articleContent]=useState([{titreArticle:'Titre article 1',texteArticle:'Lorem texte article 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor nisi, condimentum non nisi sit amet, posuere sollicitudin nunc. Nulla faucibus nec nisl eu suscipit. Aenean consectetur rhoncus eni'},{titreArticle:'Titre article 2',texteArticle:'Lorem texte article 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor nisi, condimentum non nisi sit amet, posuere sollicitudin nunc. Nulla faucibus nec nisl eu suscipit. Aenean consectetur rhoncus eni'}])

    console.log(articleContent);


    return (
        <div className='section'>
            
            <Article imgArticle={Cat}titreArticle={articleContent[0].titreArticle} texteArticle={articleContent[0].texteArticle}></Article>
            <Article imgArticle ={Apple}titreArticle={articleContent[1].titreArticle} texteArticle={articleContent[1].texteArticle}></Article>    
            
        </div>
    )
}
export default Section
