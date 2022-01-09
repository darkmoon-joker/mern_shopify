import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import { listProducts } from '../actions/productActions'
import ProductPage from "./ProductPage"
import Loader from "../components/shared/Loader"
import Message from "../components/shared/Message"

const HomePage = () => {

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <React.Fragment>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} md={3}>
                            <ProductPage product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </React.Fragment>
    )
}

export default HomePage

