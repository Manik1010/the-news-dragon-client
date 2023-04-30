import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const catagoryNews = useLoaderData()
    return (
        <div>
            {/* <h2>This is category: {id}</h2> */}
            {/* <h2>This is category: {catagoryNews.length}</h2> */}
            {id  && <h2>This is category: {catagoryNews.length}</h2> }
            {
                catagoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;