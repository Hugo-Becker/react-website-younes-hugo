import React,{ useState } from 'react'
import Article from './composants/Article'


// import Apple from '../img/apple.jpeg'
// import Cat from '../img/cat-icon.png'
import Pic1 from '../img/images/pic01.jpg'
import Pic2 from '../img/images/pic02.jpg'









export const Section = () => {

    const[articleContent]=useState([{titreArticle:'Titre article 1',texteArticle:'Lorem texte article 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor nisi, condimentum non nisi sit amet, posuere sollicitudin nunc. Nulla faucibus nec nisl eu suscipit. Aenean consectetur rhoncus eni'},{titreArticle:'Titre article 2',texteArticle:'Lorem texte article 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor nisi, condimentum non nisi sit amet, posuere sollicitudin nunc. Nulla faucibus nec nisl eu suscipit. Aenean consectetur rhoncus eni'}])

    console.log(articleContent);


    return (
        <div className='section'>
            
            <Article imgArticle={Pic1}titreArticle={articleContent[0].titreArticle} texteArticle={articleContent[0].texteArticle}></Article>
            <Article imgArticle ={Pic2}titreArticle={articleContent[1].titreArticle} texteArticle={articleContent[1].texteArticle}></Article>    
            
        </div>
    )
}
export default Section
