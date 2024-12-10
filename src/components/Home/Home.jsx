/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import './Home.css'

const Home = ({ news }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (news.length > 0) {
            setLoading(false);
        }
    }, [news]);


    return (
        <>
            <div className='home'>
                {loading ? (
                    <div className='loading'>
                        <div className="spinner"></div>
                        <p>Loading news...</p>
                    </div>
                ) :
                    (
                        news.filter((element)=> element.url !== "https://removed.com").map((element) => (
                            <Card key={element.url}
                                title={element.title}
                                description={element.description}
                                author={element.author}
                                publishedAt={element.publishedAt}
                                url={element.url}
                                urlToImage={element.urlToImage}
                                altImage={"/sample Image.jpg"}
                            />
                        ))
                    )}
            </div>
        </>
    )
}

export default Home