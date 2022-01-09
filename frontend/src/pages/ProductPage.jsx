import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";

const ProductPage = (props) => {

    return (
        <React.Fragment>
            <Card className="my-5 p-5 rounded">
                <Link to={`/product/${props.product._id}`}>
                    <Card.Img src={props.product.image} variant="top" />
                </Link>
                <Card.Body>
                    <Link to={`/product/${props.product._id}`}>
                        <Card.Title as="div">
                            <strong>{props.product.name}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as="div">INR {props.product.price}</Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default ProductPage

