import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaRegBookmark, FaShareAltSquare, FaRegEye, FaRegStar, FaStar } from 'react-icons/fa'
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    // console.log(news);
    const { _id, title, name, details, image_url, author, total_view, rating } = news;
    // console.log(title);
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex aline-items-center'>
                <Image style={{ height: '40px' }} src={author.img} roundedCircle />
                <div className='ps-4 flex-grow-1'>
                    <p className='mb-0'>{author.name}</p>
                    <p><small>{moment(author.published_date).format('yyyy MM D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAltSquare></FaShareAltSquare>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link> </>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaRegEye></FaRegEye>{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;
