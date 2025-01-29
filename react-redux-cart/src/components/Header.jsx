import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/cart" className="text-decoration-none text-light">Open cart</NavLink>
                    <Nav className="me-auto mx-5">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>

                    </Nav>
                    <NavLink to="#" className="text-decoration-none text-light">
                        <Badge badgeContent={4} color="primary" id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <AddShoppingCartIcon fontSize='large' />
                        </Badge>
                    </NavLink>
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <div className="card-details d-flex justify-content-center align-items-center" style={{width:"24rem",padding:10,position:"relative"}}>
                        <i className='fas fa-close smallclose' style={{position:"absolute",top:2,right:20,fontSize:20,cursor:"pointer"}} onClick={handleClose}>X</i>
                        <p className='mx-5' style={{fontSize:22}}>Your cart is empty</p>
                    </div>
                    
                </Menu>
            </Navbar>
        </>)
}

export default Header;