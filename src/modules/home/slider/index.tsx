/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import { slider } from "./constant";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true
};

export default function SliderHome(): React.ReactElement {
  return (
    <div>
      <Slider {...settings}>
        {slider.map((v) => (
          <img src={v} key={v} alt="d" />
        ))}
      </Slider>
    </div>
  );
}
