import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { productContext } from '../../../App';

const MiddleHeader = () => {
    const [carryProduct, setCarryProduct] = useContext(productContext)
    return (
        <div className="header-middle sticky-top">
             <Navbar bg="dark" variant="dark"  >
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav style={{width: '90%'}}> 
                    <Form className="d-flex ms-auto" style={{width: '90%'}}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        
                        aria-label="Search"
                        />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                    </Nav>
                    <Nav className="">
                    <Nav.Link href="register" className="text-white">My Account</Nav.Link>
                    <Nav.Link href="features" className="text-white">Features</Nav.Link>
                    <Nav.Link href="cart"><FaShoppingCart className="text-white fs-3" /> <span className="text-warning"> {carryProduct.cart?.length === 0 ? " " : carryProduct.cart?.length }</span> </Nav.Link>
                    </Nav>
              
                </Container>
             </Navbar>
                        
        </div>
    );
};

export default MiddleHeader;