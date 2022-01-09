import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Button, Image, ListGroupItem, Form, } from "react-bootstrap";
import { listProductDetails } from "../actions/productActions";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ match }) => {

    const history = useNavigate();
    const { id } = useParams();
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [dispatch, match]);

    const addToCartHandler = () => {

        history(`/cart/${id}?qty=${qty}`);
    };

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
                        <ListGroupItem>Price : INR{' '}{product.price}</ListGroupItem>
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

                    {product.countInStock > 0 && (
                        <ListGroupItem>
                            <Row>
                                <Col>Qty</Col>

                                <Form.Control
                                    as="select"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                >
                                    {[...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Row>
                        </ListGroupItem>
                    )}

                    <ListGroupItem>
                        <Button
                            className="btn-block"
                            type="button"
                            onClick={addToCartHandler}
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