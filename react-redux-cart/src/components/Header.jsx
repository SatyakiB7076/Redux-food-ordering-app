import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{height:"60px"}}>
                <Container>
                    <NavLink to="/cart" className="text-decoration-none text-light">Add to cart</NavLink>
                    <Nav className="me-auto mx-5">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>

                    </Nav>
                    <Navbar.Brand href="#cart">
                        <Badge badgeContent={4} color="primary">
                            <AddShoppingCartIcon fontSize='large' />
                        </Badge>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>)
}

export default Header;