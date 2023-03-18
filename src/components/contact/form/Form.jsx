import React, { useRef } from "react";
import Container from "../../../ui/container/Container";
import FuncButton from "../../../ui/functional-button/FuncButton";

import LauralsImage from "../../../assets/laurels.png";

import "./Form.css";
const Form = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const submitHandler = () => {
    console.log({
      fullname: ref1.current.value,
      email: ref2.current.value,
      message: ref3.current.value,
    });
  };
  return (
    <section className="contact__form">
      {" "}
      <Container>
        <div className="content">
          <div className="contact__form-form-container">
            <form className="contact__form-form">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                className="form__input"
                ref={ref1}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="form__input"
                ref={ref2}
              />
              <textarea
                name="message"
                className="form__input form__input-textarea"
                placeholder="Message"
                ref={ref3}
              ></textarea>

              <FuncButton text="subscribe" handler={submitHandler} />
            </form>
          </div>
          <div className="image">
            <img src={LauralsImage} alt="laurels" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Form;
