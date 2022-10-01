import React from "react";
import "./CityDateAndTimeDetails.css";

export default function CityDateAndTimeDetails() {
  let cityDateAndTimeDetails = {
    city: "Lisbon",
    weekday: "Monday",
    month: "August",
    date: 9,
    hours: 15,
    minutes: 30,
  };

  return (
    <div className="PlaceDateTime">
      <h2>{cityDateAndTimeDetails.city}</h2>
      <h3>
        {cityDateAndTimeDetails.weekday}, {cityDateAndTimeDetails.month}{" "}
        {cityDateAndTimeDetails.date}th | {cityDateAndTimeDetails.hours}h
        {cityDateAndTimeDetails.minutes}
      </h3>
    </div>
  );
}
