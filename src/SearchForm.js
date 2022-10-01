import React from "react";
import { Form } from "react-bootstrap";
import "./SearchForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <Form className="SearchCityForm">
        <Form.Group>
          <Form.Control
            type="search"
            placeholder="Enter city..."
            className="FormControl SearchCity"
            autoFocus="on"
            autoComplete="off"
          />
        </Form.Group>

        <input type="submit" value="Go!" className="GoButton" />

        <FontAwesomeIcon
          icon={faLocationDot}
          className="CurrentLocation"
          alt="current location"
          title="My Current Location"
        />
      </Form>
    </div>
  );
}
