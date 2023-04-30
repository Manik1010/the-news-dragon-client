import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData, Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa'
import EditorInsights from '../EditorsInsights/EditorInsights';



const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;
    // console.log(category_id);

    return (
        // <div>
        //     News
        // </div>
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/catagoriy/${category_id}`}> <Button variant="danger"> <FaArrowCircleLeft></FaArrowCircleLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorInsights
                category_id = {category_id}
            ></EditorInsights>
        </div>
    );
};

export default News;