import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Catagories = () => {
    const getNews = useLoaderData()
    console.log(getNews)
    return (
        <div>
            {
                getNews.map(news =><NewsCart
                key={news._id}
                news={news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Catagories;