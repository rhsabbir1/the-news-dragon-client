import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaBookmark, FaShareAlt, FaEye } from 'react-icons/fa';

const NewsCart = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <Card className="my-2">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author.name}</p>
                    <p><small>{moment(author?.published_date).format('yyy-MM-D')}</small></p>
                </div>

                <div>
                    <FaBookmark></FaBookmark>
                    <FaShareAlt></FaShareAlt>

                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.lenght < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    {rating?.number}
                </div>
                <div>
                    <FaEye className='m-2'></FaEye>{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCart;