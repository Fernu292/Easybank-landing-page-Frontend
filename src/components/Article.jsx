import React from 'react';


const Article = ({article}) => {
    return ( 
        <div className='card-article'>
            <img src={article.img} alt={article.title} />
            <div>
                <p className='author'>{article.author}</p>
                <h2 className='title'>{article.title}</h2>
                <p className='content'>{article.content}</p>
            </div>
            
        </div>
    );
}
 
export default Article;
