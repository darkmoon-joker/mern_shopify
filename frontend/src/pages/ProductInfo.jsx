import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import { useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Button, Image, ListGroupItem, Form, } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductInfo = () => {

    const { id } = useParams();
    const [product, setProducts] = useState([])
    useEffect(() => {
        const fetchProdutcs = async () => {
            const { data } = await axios.get(`/products/${id}`)
            setProducts(data)
        }

        fetchProdutcs()
    }, [])

    return (
        <div>
            <Link to="/" className="btn"><i className="fas fa-arrow-left"></i>{' '}Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} Reviews`}
                            />
                        </ListGroupItem>
                        <ListGroupItem>Price : ${product.price}</ListGroupItem>
                        <ListGroupItem>{product.description}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroupItem>
                        <Row>
                            <Col>Status :</Col>
                            <Col>
                                {product.countInStock > 0 ? "In Stock " : "out of stock"}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button
                            className="btn-block"
                            type="button"
                        >
                            Add to cart
                        </Button>
                    </ListGroupItem>
                </Col>
            </Row>
        </div>
    );
}

export default ProductInfo;