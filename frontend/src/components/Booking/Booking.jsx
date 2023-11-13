import React from "react";
import './Booking.css'
import {Form ,FormGroup,ListGroup,ListGroupItem,Button} from 'reactstrap'



const Booking = ({tour}) => {

const {price,reviews} = tour

    return <div className="booking">
        <div className="booking_top d-flex align-items-center justify-content-between">
            <h3>Rs.{price}<span>/Per Person</span></h3>
        </div>

    </div>;
};

export default Booking;




