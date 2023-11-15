import React,{useRef} from "react";
import './SearchBar.css'
import { Col,Form, FormGroup} from "reactstrap";
import Select from 'react-select'
import {BASE_URL} from './../Utils/config.js'
import {useNavigate} from 'react-router-dom'

const options = [
    { value: 'Honeymoon', label: 'Honeymoon' },
    { value: 'Beach holiday', label: 'Beach holiday' },
    { value: 'Wildlife excursion', label: 'Wildlife excursion' },
    { value: 'Family Holiday ', label: 'Family Holiday ' }

  ]

const SearchBar = () => {

    const locationRef = useRef('')
    const durationceRef = useRef(0)
    const maxgroupSizeRef = useRef(0)
    const specialtyRef = useRef('')
    const navigate = useNavigate()

    const searchhandler = async ()=>{
        const location =locationRef.current.value
        const duration = durationceRef.current.value
        const maxgroup = maxgroupSizeRef.current.value
        const specialty = specialtyRef.current.value

        if(location==='' ||  maxgroup==='' || duration==='' || specialty===''){
            return alert(" All fields are required")
        }

const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&duration=${duration}&maxGroupSize=${maxgroup}&specialty=${specialty}`)

if (!res.ok) alert('something went to wrong')
const result = await res.json()
navigate(`/tours/search?city=${location}&duration=${duration}&maxGroupSize=${maxgroup}&specialty=${specialty}`, {state:result.data})


    }


    return <Col lg='12'>
        <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                <i class="ri-map-pin-line"></i> </span>
                <div>
                    <h1 className="Text">Destination</h1>
                    <input type="Text" placeholder="Where are you going" ref={locationRef}/>
                </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                <i class="ri-map-pin-time-line"></i></span>   
         <div>
                    <h1 className="Text">Duration</h1>
                    <input type="number" placeholder="No of Days" ref={durationceRef}/>
                </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-last">
                <span>
                <i class="ri-group-line"></i> </span>
                <div>
                    <h1 className="Text">No of Travalers</h1>
                    <input type="number" placeholder="number of Travalers" ref={maxgroupSizeRef}/>
                </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-last">
                <span>
                <i class="ri-user-heart-fill"></i> </span>
                <div>
                    <h1 className="Text">Specialty</h1>
                    {/* <input type="Text" placeholder="Select Package"/> */}
                    <Select options={options} placeholder="Select Specialty" ref={specialtyRef}/>                </div>
            </FormGroup>
            <span className="search__icon" type="submit" onClick={searchhandler}>
            <i class="ri-search-line"></i>
            </span>
        </Form>
        </div>
        </Col>
};

export default SearchBar;