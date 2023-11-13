import React from "react";
import '../Styles/TourDetails.css'
import { Container,Row,Col,Form,ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from '../assets/data/tours'
import calculateAvgRating from "../Utils/avgRating";

const TourDetails = () => {

const {id} = useParams()

const tour = tourData.find(tour => tour.id === id)

const {photo , title, desc,price,reviews,city,duration,maxGroupSize,Specialty}= tour;


const {totalRating,avgRating} = calculateAvgRating(reviews)


    return <>
    <section>
        <Container>
            <Row>
                <Col lg='8'>
                    <div className="tour__content">
                        <img src={photo} alt=""/>
                        <div className="tour__info">
                            <h2>{title}</h2>
                        <div className="d-flex align-item-center gap-5">
                        <span className="tour__rating de-flex align-items-center gap-1">
             <i class="ri-star-fill" style={{color: "orange"}}></i> {calculateAvgRating === 0 ? null : avgRating }
             {totalRating === 0 ? (
                "Not rated"
                ) :( 
                <span>({reviews.length})</span>
                )}

             
             </span>
              <span> 
              <i class="ri-map-pin-fill"></i> {city}
              </span>
               
                        </div>
                        <div className="tour__extra-details">
                            <span><i class="ri-map-pin-time-line"></i>{duration}</span>
                            <span><i class="ri-money-dollar-circle-line"></i>Rs.{price} / Per Person</span>
                             <span><i class="ri-group-line"></i>{maxGroupSize}</span>
                             <span><i class="ri-user-heart-fill"></i>{Specialty}</span>
                        </div>
                           <p>{desc}</p>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    
    </>
};

export default TourDetails;
