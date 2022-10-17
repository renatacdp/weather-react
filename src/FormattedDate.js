import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[props.data.date.getDay()];
  let date = props.data.date.getDate();
  let hours = props.data.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.data.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let month = months[props.data.date.getMonth()];

  return (
    <div>
      {day}, {month} {date} | {hours}h{minutes}
    </div>
  );
}
