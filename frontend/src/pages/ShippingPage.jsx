import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FromContainer from "../components/shared/FromContainer";
import { saveShippingAddress } from "../actions/cartAction";
import { useNavigate } from "react-router-dom";

const ShippingPage = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const history = useNavigate();

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalcode, setPostalcode] = useState(shippingAddress.postalcode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(saveShippingAddress({ address, city, postalcode, country }));
    history("/payment");
  };

  return (
    <React.Fragment>
      <FromContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="postalcode">
            <Form.Label>Pin-Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pin-code"
              value={postalcode}
              onChange={(e) => setPostalcode(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <br />
          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FromContainer>
    </React.Fragment>
  );
};

export default ShippingPage;