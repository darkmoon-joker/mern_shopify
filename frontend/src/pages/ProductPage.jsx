import React from "react"
import Products from "../Products"
import { Card } from "react-bootstrap"
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const ProductPage = (props) => {

    return (
        <React.Fragment>
            <Card className="my-3 p-3 rounded">
                <Link to={`/product/${props.product._id}`}>
                    <Card.Img src={props.product.image} variant="top" />
                </Link>
                <Card.Body>
                    <Link to={`/product/${props.product._id}`}>
                        <Card.Title as="div">
                            <strong>{props.product.name}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as="div">
                        <Rating
                            value={props.product.rating}
                            text={`${props.product.numReviews} reviews`}
                        />
                    </Card.Text>
                    <Card.Text as="div">$ {props.product.price}</Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default ProductPage
