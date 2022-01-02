import React, { useState, useEffect } from "react"
import axios from "axios"
import { Row, Col } from "react-bootstrap"
import ProductPage from "./ProductPage"

const HomePage = () => {

    const [Products, setProducts] = useState([])
    useEffect(() => {
        const fetchProdutcs = async () => {
            const { data } = await axios.get('/products')
            setProducts(data)
        }

        fetchProdutcs()
    }, [])

    return (
        <React.Fragment>
            <Row>
                {Products.map(product => <Col md={4} key={product._id}><ProductPage product={product} /></Col>)}
            </Row>
        </React.Fragment>
    )
}

export default HomePage

