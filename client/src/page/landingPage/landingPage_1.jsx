import React from "react";
import style from "./landingPage_1.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { keyframes } from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Wrap = styled.div`

  slick-slide{
    display: none:
  }

  .slick-prev {
    width:0
    position: absolute;
    left: 0;
    z-index: 999;
  }
  .slick-next {
    width:0
    position: absolute;
    right: 4em;
  }
  .slick-prev:before,
  .slick-next:before {
    /* background-color: black; */
    font-family: "slick";
    font-size: 90px;
    font-weight: 700;
    line-height: 0.01;
    opacity: 0.6;
    /* color: #000000; */
    color: white;
    /* font-size: 25px; */
    /* margin: 0.51em; */
    -webkit-font-smoothing: antialiased;
  }

  .slick-prev:before {
    content: "‹";
  }
  [dir="rtl"] .slick-prev:before {
    content: "›";
  }

  [dir="rtl"] .slick-next {
    left: -10px;
    top: 70px;
    right: auto;
  }
  .slick-next:before {
    content: "›";
  }
  [dir="rtl"] .slick-next:before {
    content: "‹";
  }

  .slick-dots {
    display: absolute;
    bottom: 4em;
    z-index: 950;
  }
  .slick-dots li button:before {
    color: white;
  }
  .slick-list {
    background-color: black;
  }
`;

const LandingPage_1 = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    autoplay: false, // 자동 스크롤 사용 여부
    autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true,
    dots: true,
  };

  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={style.container}>
      <div
        className={style.text_1}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        자존감이 많이 떨어지셨나요 ?
        <br />
        무기력함이 자신을 지배하고 있나요 ?
        <br />
        우리 인생 선배들에게 조언과 위로를 받아보세요
      </div>
      <div
        className={style.text_2}
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1500"
      >
        All For You는 모두와 함께 하길 원합니다
      </div>
      <Wrap>
        <div
          data-aos="zoom-in"
          // data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <Slider {...settings}>
            <img
              className={style.img_1}
              src="/landingPage_image/landingPage_1/함께.jpg"
              alt=""
            />
            <img
              className={style.img_1}
              src="/landingPage_image/landingPage_1/고뇌.jpg"
              alt=""
            />
            <img
              className={style.img_1}
              src="/landingPage_image/landingPage_1/용기.jpg"
              alt=""
            />
            <img
              className={style.img_1}
              src="/landingPage_image/landingPage_1/슬픔.jpg"
              alt=""
            />
            <img
              className={style.img_1}
              src="/landingPage_image/landingPage_1/멘토1.jpg"
              alt=""
            />
            <img
              className={style.img_1}
              src="/landingPage_image/landingPage_1/웃음.jpg"
              alt=""
            />
          </Slider>
        </div>
      </Wrap>

      <div className="scroll_down">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </div>
  );
};

export default LandingPage_1;
