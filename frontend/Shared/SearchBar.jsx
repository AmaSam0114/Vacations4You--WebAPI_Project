import React from "react";
import './SearchBar.css'
import { Col,Form, FormGroup} from "reactstrap";

const SearchBar = () => {
    return <Col lg='12'>
        <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                <i class="ri-map-pin-line"></i> </span>
                <div>
                    <h1>Location</h1>
                    <input type="Text" placeholder="Where are you going"/>
                </div>
            </FormGroup>
        </Form>
        </div>
        </Col>
};

export default SearchBar;