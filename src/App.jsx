/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import TrendingNews from './components/TrendingNews/TrendingNews'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Preloader from './components/Preloader/Preloader'

const App = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKeys = import.meta.env.VITE_NEWS_API_KEY;


  /**
   * @param {string} category
   */

  const filterNews = async (category = "everything") => {
    setLoading(true);
    let link;
    
    if (category && category !== "everything") {
      link = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKeys}`
    } else {
      link = `https://newsapi.org/v2/everything?q=India&latest&language=en&sortBy=publishedAt&apiKey=${apiKeys}`
    }
    
    try {
      const { data } = await axios.get(link);
      if (data.articles.length === 0) {
        toast.error("No news available for the selected category. Please try another.");
      }
      else{
        setNews(data.articles);
      }
    } catch (error) {
      toast.error("Failed to fetch news. Please try again later.");
    }
    finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  /**
   * @param {string} query
   */

  const searchNews = async (query) => {
    if (!query.trim()) {
      toast.error("Search query cannot be empty.");
      return;
    }

    const link = `https://newsapi.org/v2/everything?q=${query}&latest&language=en&sortBy=publishedAt&apiKey=${apiKeys}`;
    setLoading(true);

    try {
      const { data } = await axios.get(link);
      if (data.articles && data.articles.length > 0) {
        setNews(data.articles);
      }
      else {
        toast.warn("No articles found for the given search query.");
      }
    }
    catch (error) {
      console.error("Error fetching news:", error);
      toast.error("Failed to fetch news. Please try again later.");
    }
    finally {
      setTimeout(() => setLoading(false), 1000);
    }
  }

  useEffect(() => {
    filterNews();
  }, [])

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar filterNews={filterNews} />
          <SearchBar searchNews={searchNews} />
          <TrendingNews />
          <Home news={news} />
          <Footer />
          <ToastContainer />
        </>
      )}
    </>
  )
}

export default App