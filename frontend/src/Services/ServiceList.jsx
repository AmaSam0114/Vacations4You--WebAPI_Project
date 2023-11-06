import React from "react";
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'
import activityImg from '../assets/images/activity.png'
import cruImg from '../assets/images/cruise.png'


const servicesData=[
   { imgUrl:activityImg,
    title:'Activity Reservations',
    desc: 'Booking adventures, events, and experiences for leisure and recreation.'
},
{ imgUrl:cruImg,
    title:'Cruise Reservations',
    desc: 'Booking tickets for exciting journeys on big, floating vacation ships.'
},
];



const ServiceList = () => {
    return (<>
    {servicesData.map((item, index)=>(
            <Col lg='3'key={index}>
                <ServiceCard item={item}/>
            </Col>
        ))
    }
    </>);
};

export default ServiceList;
