import React from "react";
import '../Styles/Home.css'
import {Container, Row, Col} from 'reactstrap'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import world from '../assets/images/world.png'
import Subtitle from "../Shared/Subtitle";
import SearchBar from '../Shared/SearchBar'
import ServiceList from "../Services/ServiceList";
import FeaturedTourList from "../components/Featured_Tours/FeaturedTourList";

const Home = () => {
    return <>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__content">
                        <div className="hero__subtitle d-flex align-items-center">
                            <Subtitle subtitle={'Know Before You Go'}/>
                            <img src={world} alt=""/>
                        </div>
                        <h1>A journey of a thousand miles begins with a single step</h1>
                        <p>Sri Lanka's beauty is breathtaking, featuring lush landscapes, pristine beaches, and a rich cultural heritage. It's a paradise for nature lovers with diverse flora and fauna. The warm hospitality, ancient temples, and tasty cuisine make it a captivating destination.</p>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box">
                        <img src={img1} alt=""/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box mt-4">
                        <img src={img2} alt=""/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box">
                        <img src={img3} alt=""/>
                    </div>
                </Col>
                <SearchBar/>
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg="3">
                    <h5 className="service__subtitle">what we serve</h5>
                    <h2 className="service__title">We offer our best services</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
    </section>

    {/* ------------------------- featured packages--------------------------------*/}

<section>
    <Container>
        <Row>
            <Col lg='12' className="mb-5">
                <Subtitle subtitle={'Explore'}/>
                <h2 className="featured__tour-title">Our featured tours</h2>

            </Col>
            <FeaturedTourList/>
        </Row>
    </Container>
</section>


    </>
    
};

export default Home;
