import React, { useRef } from "react";

import SectionTitle from "../../ui/section-title/SectionTitle";
import FuncButton from "../../ui/functional-button/FuncButton";

import Logo from "../../assets/restaurant-logo.svg";
import "./Newsletter.css";
const Newsletter = () => {
  const ref = useRef();
  const submitHandler = () => {
    console.log(ref.current.value);
  };
  return (
    <div className="newsletter">
      <SectionTitle title="newsletter" subTitle="subscribe to our newsletter" />
      <p className="updates">And never miss latest Updates!</p>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="form__input"
          ref={ref}
        />
        <FuncButton text="subscribe" handler={submitHandler} />
      </form>
      <div className="logo">
        <img src={Logo} alt="restaurant__logo" className="restaurant__logo" />
      </div>
    </div>
  );
};

export default Newsletter;
