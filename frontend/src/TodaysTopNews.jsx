import React from "react";
import { useState } from "react";
const TodaysTopNews = () => {
    const[getNews, setGetNews] = useState([])
    const getData = () => {
        fetch("/news")
        .then((res) =>res.json())
        .then((data) => setGetNews(data.api.results));
    };
    React.useEffect(() => getData(), []);
    const newsingly = getNews.map((news) => {
        return <div><a href={news.url} target="_blank" rel="noreferrer">{news.abstract}</a></div>
    });
    return(
        <div>{newsingly}</div>
    );
};
export default TodaysTopNews;