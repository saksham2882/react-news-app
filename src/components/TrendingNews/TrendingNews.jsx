/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import TrendingNewsCard from '../TrendingNewsCard/TrendingNewsCard';
import './TrendingNews.css'

const TrendingNews = () => {

    const [trendingNews, setTrendingNews] = useState([]);
    const [loading, setLoading] = useState(true);

    const sliderRef = useRef(null); 

    useEffect(() => {
        const fetchTrendingNews = async () => {
            const apiKey = import.meta.env.VITE_NEWS_API_KEY;
            const url = `https://newsapi.org/v2/top-headlines?country=us&language=en&sortBy=publishedAt&pageSize=20&apiKey=${apiKey}`;

            try {
                const { data } = await axios.get(url);
                if (data.articles) {
                    setTrendingNews(data.articles);
                }
            }
            catch (error) {
                console.error("Error fetching trending news: ", error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchTrendingNews();
    }, [])


    const handleScroll = (direction) => {
        const container = sliderRef.current;
        const cardWidth = container.firstChild.offsetWidth;
        const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    return (
        <>
            <div className="trending-news-slider">
                <h3 className='slider-heading'>Trending News</h3>
                {loading ? (
                    <p>Loading trending news...</p>
                ) : trendingNews.length > 0 ? (
                    <div className="slider-container">
                        <button className="prev-btn" onClick={() => handleScroll('left')}>
                            ❮
                        </button>
                        <div className="slider-wrapper" ref={sliderRef}>
                                {trendingNews.filter((element) => element.url !== "https://removed.com").map((article, index) => (
                                <TrendingNewsCard article={article} key={index} />
                            ))}
                        </div>
                        <button className="next-btn" onClick={() => handleScroll('right')}>
                            ❯
                        </button>
                    </div>
                ) : (
                    <p>No trending news available.</p>
                )}
            </div>
        </>
    )

}

export default TrendingNews
