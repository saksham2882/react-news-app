/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './TrendingNewsCard.css'

const TrendingNewsCard = ({ article }) => {

    const truncateTime = (timestamp) => {
        const truncateDate = timestamp.substring(0, 10);
        const truncateTime = timestamp.substring(11, 19);
        return `${truncateDate} ${truncateTime}`;
    }

    return (
        <>
            <div className="news-card">
                <div className="trending-tag">Trending</div>
                <img src={article.urlToImage ? article.urlToImage : "/sample Image.jpg"} alt={article.title} className='news-image' />
                <div className="news-content">
                    <h4 className="news-title">{article.title}</h4>
                    <div className='url-container'>
                        <a href={article.url} target='_blank' className='read-more'> Read more</a>
                        <h5>Published At: {truncateTime(article.publishedAt)} </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingNewsCard