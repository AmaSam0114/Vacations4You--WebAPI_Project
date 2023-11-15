import React from "react";
import TourCard from "../../Shared/TourCard";
import tourData from "../../assets/data/tours"
import {Col} from "reactstrap"
import useFetch from './../../hooks/userFetch'
import {BASE_URL} from './../../Utils/config.js'

const FeaturedTourList = () => {

const {data: featuredTour,loading,error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)

console.log(featuredTour);

    return <>
    {tourData?.map(tour => (
<Col lg='3' className='mb-4' key={tour._id}>
    <TourCard tour={tour}/>
</Col>
    ))

    }
    </>
};

export default FeaturedTourList;




