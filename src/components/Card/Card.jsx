/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { LuArrowRightCircle } from 'react-icons/lu'
import './Card.css'

const Card = ({
    title,
    description,
    author,
    publishedAt,
    url,
    urlToImage,
    altImage
}) => {

    const truncateTitle = (title) => {
        const noTitle = "No Title for this News."
        if (!title) {
            return noTitle;
        }
        const words = title.split(" ");
        if (words.length > 20) {
            return words.slice(0, 20).join(" ") + "...";
        }
        return title;
    }

    const truncateDescription = (description) => {
        const noDescription = "Visit website to read full article."
        if (!description) {
            return noDescription;
        }
        const words =  description.split(" ");
        if (words.length > 20) {
            return words.slice(0, 20).join(" ") + "...";
        }
        return  description;
    }

    const truncateAuthor = (author) => {
        const noAuthor = "Anonymous";
        if (!author) {
            return noAuthor;
        }
        const words = author.split(" ");
        if (words.length > 2) {
            return words.slice(0, 2).join(" ") + "...";
        }
        return author;
    }

    const truncateTime = (time) => {
        const timestamp = time;
        const truncateDate = timestamp.substring(0, 10);
        const truncateTime = timestamp.substring(11, 19);
        return `${truncateDate} ${truncateTime}`;
    }

    return (
        <>
            <div className='card'>
                <div className="content">
                    <img src={urlToImage ? urlToImage : altImage} alt={"Poster Not Found"} />
                    <h3> {truncateTitle(title)}</h3>
                    <p className='main-content'>{truncateDescription(description)}</p>
                    <div className="author-container">
                        <div className="author">
                            <p>Author: {truncateAuthor(author)}</p>
                            <a href={url} target='_blank'>
                                <LuArrowRightCircle />
                            </a>
                        </div>
                        <h4>
                            Published At: <span>{truncateTime(publishedAt)}</span>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
