import React, { useState } from "react";

import Container from "../../../ui/container/Container";
import SectionTitle from "../../../ui/section-title/SectionTitle";
import FuncButton from "../../../ui/functional-button/FuncButton";
import SelectComponent from "./Select";

import restaurantLogo from "../../../assets/restaurant-logo.svg";
import "./Booking.css";

const preson__options = ["1 person", "two", "three", "four"];
const time__options = [
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 AM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

const Booking = () => {
  // to calculate date selectbox from today to next week
  const startDate = new Date().toLocaleDateString();

  var boxingDay = new Date(startDate);
  var nextWeek = boxingDay * 1 + 7 * 24 * 3600 * 1000;

  function getDates(d1, d2) {
    var oneDay = 24 * 3600 * 1000;
    for (var d = [], ms = d1 * 1, last = d2 * 1; ms < last; ms += oneDay) {
      d.push(new Date(ms).toLocaleDateString());
    }
    return d;
  }
  // end date selectbox

  const date__options = getDates(boxingDay, nextWeek).join("\n").split("\n");

  const [person, setPerson] = useState("1 person");
  const [date, setDate] = useState(startDate);
  const [time, setTime] = useState("7 AM");
  const personHandler = (event) => {
    setPerson(event.target.className);
  };
  const dateHandler = (event) => {
    setDate(event.target.className);
  };
  const timeHandler = (event) => {
    setTime(event.target.className);
  };

  const bookHandler = () => {
    const data = {
      person,
      date,
      time,
    };
    console.log(data);
    setPerson("1 person");
    setDate(startDate);
    setTime("7 AM");
  };

  return (
    <section className="booking__section">
      <Container>
        <div className="table">
          <SectionTitle title="Reservations" subTitle="book a table" />
          <div className="inputs__container">
            <SelectComponent
              value={person}
              handler={personHandler}
              options={preson__options}
            />
            <SelectComponent
              value={date}
              handler={dateHandler}
              options={date__options}
            />
            <SelectComponent
              value={time}
              handler={timeHandler}
              options={time__options}
            />
          </div>
          <FuncButton text="book now" handler={bookHandler} />
        </div>
      </Container>
      <img src={restaurantLogo} alt="restaurant" className="restaurant-logo" />
    </section>
  );
};

export default Booking;
