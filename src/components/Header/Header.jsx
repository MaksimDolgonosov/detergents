import React from 'react';
import './header.scss'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/logo2.svg';
// import { useAuth } from '../../hooks/useAuth';
import { setActiveCategory } from '../../slices/categorySlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowRightToBracket } from "react-icons/fa6";
// import EnterLogo from '../../images/logo/enter.svg';
import { removeUser } from '../../slices/userSlice';
import { FaBasketShopping } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllCaregoriesQuery } from '../../query/categoriesApiSlice';

const Header = () => {
    const basket = useSelector(state => state.user.basket);
    const isAuth = useSelector(state => state.user.isAuth);
    const name = useSelector(state => state.user.name);
    const { data: categories = [] } = useGetAllCaregoriesQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();


    const Name = () => {
        return (
            <>
                <IoPersonCircleOutline style={{ marginBottom: "3px", marginRight: "3px" }} />
                {name}
            </>
        )
    }

    const onLogout = () => {
        dispatch(removeUser());
        localStorage.setItem("userId", null);
    }

    const setCategory = (category) => {

        if (location.pathname !== "/goods") {
            navigate("/goods");
        }
        dispatch(setActiveCategory(category));
    }


    const cat = categories.map((item, index) => {


        const subCat = item.subcategories.map((data, i) => {
            return (
                <NavDropdown.Item key={i} style={{ fontSize: "15px" }} onClick={() => setCategory(data)}>{data}</NavDropdown.Item >
            )
        })

        return (
            // <DropdownButton drop="end" title={item.name} key={index} style={{ width: "100%" }}>
            //     <Dropdown.Item style={{ width: "100%" }}>Action</Dropdown.Item>
            // </DropdownButton>

            <NavDropdown
                key={index}
                title={item.name}
                drop="end"
                id="basic-nav-dropdown"
                className='d-block'
                style={{ fontSize: "15px" }}
            >
                {subCat}
                {/* <NavDropdown.Item href="#action/3.4">Все</NavDropdown.Item> */}
            </NavDropdown>


        )
    })


    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary header">
                <Container >
                    <Navbar.Brand  > <Link to="/"><img src={Logo} className='logo' alt='logo' /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-right">
                            <NavDropdown title="Категории" id="basic-nav-dropdown" className='d-block'>
                                {cat}
                                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={(e) => setCategory(e.target.textContent)}>
                                    Все
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action/3.4" >О нас</Nav.Link>
                            <Nav.Link href="#action/3.4" >Доставка</Nav.Link>
                            <Nav.Link href="#action/3.4" >Контакты</Nav.Link>

                        </Nav>
                        <Nav >
                            {/* <Nav.Link href="#action/3.4" > */}
                            {isAuth ?
                                <>
                                    {/* <IoPersonCircleOutline style={{ marginTop: "5%" }} /> */}
                                    <NavDropdown title={<Name />} id="basic-nav-dropdown" className='d-block header_black'>
                                        <NavDropdown.Item href="/personal">Личный кабинет</NavDropdown.Item>
                                        <NavDropdown.Item href="/basket">Корзина</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={onLogout}>Выйти</NavDropdown.Item>
                                    </NavDropdown>
                                </>

                                // <Link to="/personal"><IoPersonCircleOutline /> {name}</Link> 
                                :
                                <Nav.Link href="/login"><FaArrowRightToBracket className='nav_login' />
                                    Войти</Nav.Link>}

                            {/* </Nav.Link> */}
                            <Nav.Link href="/basket" style={{ position: "relative" }}>

                                <>
                                    <FaBasketShopping className='nav_basket' />
                                    Корзина
                                    <BasketItems quantity={basket.length} />
                                </>



                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        // <header className='header'>
        //     <div className='container'>
        //         <div className='header__panel'>
        //             <img src={Logo} className='logo' alt='logo' />
        //             <nav className='header__nav'>
        //                 <ul className='header__nav_items'>
        //                     <li className='header__nav_item'>Категории</li>
        //                     <li className='header__nav_item'>Доставка</li>
        //                     <li className='header__nav_item'>Контакты</li>
        //                 </ul>
        //             </nav>
        //             <div className='header__login'>
        //                 <svg version="1.1"  width="35" height="45" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256">
        //                     <g><g><g><path fill="#000000" d="M98.7,10.8C90.3,12.6,82.9,18.3,79,26c-2.8,5.4-3,7.5-3,22.8v14L89,62.7l12.9-0.2l0.3-10.7c0.3-11.7,0.5-12.5,3.4-14.4c1.3-0.9,4.4-0.9,48.8-0.9c47.1,0,47.5,0,48.9,1.1c0.8,0.6,1.9,1.7,2.5,2.5l1.1,1.4v86.6c0,82.4-0.1,86.7-0.9,88.3c-0.5,0.9-1.6,2.2-2.6,2.7c-1.6,1-2.7,1-49.3,0.9l-47.8-0.2l-1.9-1.9l-1.9-1.9l-0.2-11l-0.2-11H89H76v13.9c0,10.6,0.2,14.6,0.8,16.8c2.7,10.2,11.6,18.8,21.7,20.9c1.8,0.4,19.4,0.6,56.3,0.6c58.9,0,56.2,0.2,62.7-3.1c3.6-1.8,8.9-6.7,11.2-10.2c0.9-1.4,2.2-4.1,2.9-6.2l1.4-3.7l0.2-92.7c0.2-103,0.4-96.6-3.3-104c-3.7-7.5-11.4-13.4-19.9-15.2C204.8,9.7,103.6,9.7,98.7,10.8z" /><path fill="#000000" d="M86.3,79.9c-5.2,1.6-8.7,6.6-8.7,12.3c0,4.9,1.4,7.2,10,15.5l7.4,7.2l-31.1,0.2l-31.1,0.2l-2.6,1.4c-8.3,4.4-9.8,15.4-3,21.4c4,3.5,2.4,3.3,36.8,3.5l31.2,0.2l-8,8c-4.8,4.9-8.3,8.8-8.8,9.9c-1.1,2.6-1,7.8,0.2,10.4c1.2,2.6,5.2,6.2,7.7,6.9c2.5,0.7,5.8,0.7,8.4-0.1c1.8-0.5,5.2-3.6,22.4-20.8c22.8-22.7,22.8-22.7,22.3-28.6c-0.2-2.1-0.7-3.9-1.5-5.4c-0.7-1.2-10.1-11-20.9-21.8C98.2,81.7,97.1,80.7,94.5,80C91.2,79,89.3,79,86.3,79.9z" /></g></g></g>
        //                 </svg>
        //                 {"Войти"}
        //             </div>
        //             <div className='header__basket'>
        //                 Корзина
        //             </div>
        //         </div>
        //     </div>
        //     <div className='presentation'></div>
        // </header>
    );
}

const BasketItems = ({ quantity }) => {
    if (quantity > 0) {
        return (
            <span className='header__basket__span'>{quantity}</span>
        )
    } else {
        return null;
    }

}

export default Header;
