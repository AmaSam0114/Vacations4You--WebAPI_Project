import React from "react";
import './footer.css'

import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'

const quick_links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/activity',
        display:'Activity Reservations'
    },
    {
        path:'/Cruise',
        display:'Cruise Reservations'
    }, 
];
const quick_links2=[
    {
        path:'/gallery',
        display:'Gallery'
    },
    {
        path:'/login',
        display:'Login'
    },
    {
        path:'/register',
        display:'Register'
    }, 
]


const Footer = () => {
    return (
    <footer className="footer">
        <Container>
            <Row>
                <Col lg='3'>
<div className="logo">
Vacations4You
<p className="des">""Book your travels easily with our convenient and reliable platform."</p>
<div className="social__links d-flex align-items-center gap-4"></div>
<spam>
    <Link to='#'><i class="ri-youtube-fill"></i> </Link>
</spam>
<spam>
    <Link to='#'><i class="ri-facebook-circle-fill"></i> </Link>
</spam>
<spam>
    <Link to='#'><i class="ri-instagram-fill"></i></Link>
</spam>

</div>

                </Col>
                <Col lg='3'>
                    <h5 className="footer__link-title">Discover</h5>
                    <ListGroup className="footer__quick-links">
                        {
                            quick_links.map((item,index) =>(
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>

                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                <h5 className="footer__link-title">Quick Links</h5>
                    <ListGroup className="footer__quick-links">
                        {
                            quick_links2.map((item,index) =>(
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>

                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                <h5 className="footer__link-title">Contact</h5>
                    <ListGroup className="footer__quick-links">
                        
                            
                                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span>
                                        <i class="ri-map-pin-line"></i>  
                                        Address:
                                        </span>
                                    </h6>
                                    <p className="mb-0"> 125/2A, Flowers Road, Colombo 07</p>

                                    
                                </ListGroupItem>

                                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span>
                                        <i class="ri-mail-line"></i> 
                                        Email:
                                        </span>
                                    </h6>
                                    <p className="mb-0">Vacations4You@gmail.com</p>

                                    
                                </ListGroupItem>

                                <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span>
                                        <i class="ri-phone-line"></i>
                                        Phone:
                                        </span>
                                    </h6>
                                    <p className="mb-0">011-2872538 / 0112847249</p>

                                    
                                </ListGroupItem>
                            
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>

    </footer>
        
        );
};

export default Footer;