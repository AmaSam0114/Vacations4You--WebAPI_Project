import React from "react";
import '../Styles/TourDetails.css'
import { Container,Row,Col,Form,ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from '../assets/data/tours'
import calculateAvgRating from "../Utils/avgRating";
import avatar from '../assets/images/avatar.jpg'

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
                           <div className="tour__reviews mt-4">
                           <h4>Reviews({reviews?.length}reviews)</h4>
                           <Form>
                            <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                <span><i class="ri-star-fill"></i></span>
                                <span><i class="ri-star-fill"></i></span>
                                <span><i class="ri-star-fill"></i></span>
                                <span><i class="ri-star-fill"></i></span>
                                <span><i class="ri-star-fill"></i></span>

                            </div>
                            <div className="review__input">
                                <input type="text" placeholder="Share your thoughts" />
                                <button className="btn primary__btn text-white" type="submit">Submit</button>

                            </div>
                           </Form>
                             <ListGroup className="user__reviews">
                              {
                                   reviews?.map(review =>(
                                    <div className="review__item">
                                        <img src={avatar} alt=""/>
                                        <div className="w-100">
                                         <div className="d-flex align-items-center-justify-content-between">
                                            <div>
                                                <h5>Amy</h5>
                                            </div>
                                            <span className="d-flex alin-items-center">
                                            <i class="ri-star-fill"></i>
                                            </span>

                                         </div>
                                        </div>
                                    </div>
                                   ))
                              }
                             </ListGroup>

                           </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    
    </>
};

export default TourDetails;
