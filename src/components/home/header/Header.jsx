import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import images from "../../../assets/homeHeaderImages";

import Container from "../../../ui/container/Container";
import Button from "../../../ui/button/Button";
import "./Header.css";
const Header = () => {
  const [howVisible, setHowVisible] = useState(1);
  const [next, setNext] = useState(1);
  const [auto, setAuto] = useState(true);

  const { image1, image2, image3, image4, subImage } = images;

  const prevHandler = () => {
    setAuto(false);
    if (howVisible === 1) {
      return setHowVisible(4);
    }
    setHowVisible((prev) => (prev -= 1));
  };
  const nextHandler = () => {
    setAuto(false);
    if (howVisible === 4) {
      return setHowVisible(1);
    }
    setHowVisible((prev) => (prev += 1));
  };

  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        if (howVisible === 4) {
          setHowVisible(1);
        } else {
          setHowVisible((prev) => (prev += 1));
        }
      }, 6000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [howVisible, auto]);

  return (
    <section className="home__header">
      <ul className="hashs">
        <li>#Bar</li>
        <li>#Gericht</li>
      </ul>
      <Container>
        <div className="home__header-slider">
          <ul className="slider__content">
            <li className="content ">
              <div className="text__container">
                <AnimatePresence>
                  {howVisible === 1 && (
                    <motion.div
                      className="text"
                      initial={{ y: `${next * 40}px`, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ opacity: 0, y: `${next === 1 ? -40 : 40}px` }}
                      transition={{
                        duration: 0.7,
                      }}
                    >
                      <div className="header__sub__title ">
                        <p className="sub__title__header">
                          Chase the new Flavour
                        </p>
                        <img src={subImage} alt="sub title" />
                      </div>
                      <h1 className="title">The Key To Fine Dining</h1>
                      <p className="description">
                        Sit tellus lobortis sed senectus vivamus molestie.
                        Condimentum volutpat morbi facilisis quam scelerisque
                        sapien. Et, penatibus aliquam amet tellus
                      </p>
                      <Button href="/" text="explore menu" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {howVisible === 2 && (
                    <motion.div
                      className="text"
                      initial={{ y: `${next * 40}px`, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ opacity: 0, y: `${next === 1 ? -40 : 40}px` }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="header__sub__title ">
                        <p className="sub__title__header">
                          Chase the new Flavour
                        </p>
                        <img src={subImage} alt="sub title" />
                      </div>
                      <h1 className="title">Reserve Your Table Today</h1>
                      <p className="description">
                        Sit tellus lobortis sed senectus vivamus molestie.
                        Condimentum volutpat morbi facilisis quam scelerisque
                        sapien. Et, penatibus aliquam amet tellus
                      </p>
                      <Button href="/" text="explore menu" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {howVisible === 3 && (
                    <motion.div
                      className="text"
                      initial={{ y: `${next * 40}px`, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ opacity: 0, y: `${next === 1 ? -40 : 40}px` }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="header__sub__title ">
                        <p className="sub__title__header">
                          Chase the new Flavour
                        </p>
                        <img src={subImage} alt="sub title" />
                      </div>
                      <h1 className="title">Food That Surprise You</h1>
                      <p className="description">
                        Sit tellus lobortis sed senectus vivamus molestie.
                        Condimentum volutpat morbi facilisis quam scelerisque
                        sapien. Et, penatibus aliquam amet tellus
                      </p>
                      <Button href="/" text="explore menu" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {howVisible === 4 && (
                    <motion.div
                      className="text"
                      initial={{ y: `${next * 40}px`, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ opacity: 0, y: `${next === 1 ? -40 : 40}px` }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="header__sub__title ">
                        <p className="sub__title__header">
                          Chase the new Flavour
                        </p>
                        <img src={subImage} alt="sub title" />
                      </div>
                      <h1 className="title">Love The Original Taste</h1>
                      <p className="description">
                        Sit tellus lobortis sed senectus vivamus molestie.
                        Condimentum volutpat morbi facilisis quam scelerisque
                        sapien. Et, penatibus aliquam amet tellus
                      </p>
                      <Button href="/" text="explore menu" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="image">
                <div className="silder__buttons">
                  <button
                    type="button"
                    onClick={() => {
                      setNext(-1);
                      prevHandler();
                    }}
                  >
                    <BsChevronLeft />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setNext(1);
                      nextHandler();
                    }}
                  >
                    <BsChevronRight />
                  </button>
                </div>

                <AnimatePresence>
                  {howVisible === 1 && (
                    <motion.img
                      src={image1}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {" "}
                  {howVisible === 2 && (
                    <motion.img
                      src={image2}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {" "}
                  {howVisible === 3 && (
                    <motion.img
                      src={image3}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {" "}
                  {howVisible === 4 && (
                    <motion.img
                      src={image4}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Header;
